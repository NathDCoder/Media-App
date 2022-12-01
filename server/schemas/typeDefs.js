const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    songs: [Comments]!
  }

  type Comments {
    _id: ID
    songText: String
    songAuthor: String
    createdAt: String
    comments: [Comment]!
  }

  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    songs(username: String): [Music]
    song(songId: ID!): Music
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addComment(songId: ID!, commentText: String!): Music
    removeComment(songId: ID!, commentId: ID!): Music
  }
`;

module.exports = typeDefs;