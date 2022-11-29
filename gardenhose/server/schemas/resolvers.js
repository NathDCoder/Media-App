const { AuthenticationError } = require('apollo-server-express');
const { User, Music } = require('../models'); 

const resolvers = {
    Query: {
        users: async () => {
            return User.find(),populate('songs');
        },
        user:async (parent, { username }) => {
            return User.findOne({ username }).populate('songs');
        },
        songs: async (parent, {username }) => {
            const params = username ? { username } : {};
            return Music.find(params).sort({ createdAt: -1 });
        },
        song: async (parent, { songId }) => {
            return Music.findOne({ _id: songId})
        },
        me: async (parent, args, context) => {
            if(context.user) {
                return User.findOne({ _id: context.user._id}).populate('songs')
            }
            throw new AuthenticationError('You need to login first')
        },
    },

    Mutation: {
        addUser: async (parent, { username, email, password }) => {
          const user = await User.create({ username, email, password });
          const token = signToken(user);
          return { token, user };
        },
        login: async (parent, { email, password }) => {
          const user = await User.findOne({ email });
    
          if (!user) {
            throw new AuthenticationError('No user found with this email address');
          }
    
          const correctPw = await user.isCorrectPassword(password);
    
          if (!correctPw) {
            throw new AuthenticationError('Incorrect credentials');
          }
    
          const token = signToken(user);
    
          return { token, user };
        },
        
        addComment: async (parent, { songId, commentText }, context) => {
            if (context.user) {
              return Music.findOneAndUpdate(
                { _id: songId },
                {
                  $addToSet: {
                    comments: { commentText, commentAuthor: context.user.username },
                  },
                },
                {
                  new: true,
                  runValidators: true,
                }
              );
            }
            throw new AuthenticationError('You need to be logged in!');
          },

          removeComment: async (parent, { songId, commentId }, context) => {
            if (context.user) {
              return Thought.findOneAndUpdate(
                { _id: songId },
                {
                  $pull: {
                    comments: {
                      _id: commentId,
                      commentAuthor: context.user.username,
                    },
                  },
                },
                { new: true }
              );
            }
            throw new AuthenticationError('You need to be logged in!');
          },
        },
      };
    
module.exports = resolvers;