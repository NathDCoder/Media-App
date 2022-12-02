const db = require('../config/connection');
const { User, Comment } = require('../models');
const userSeeds = require('./userSeeds.json');
const commentSeeds = require('./CommentSeeds.json');

db.once('open', async () => {
  try {
    await Comment.deleteMany({});
    await User.deleteMany({});

    await User.create(userSeeds);

    for (let i = 0; i < commentSeeds.length; i++) {
      const { _id, CommentAuthor } = await Comment.create(commentSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: commentAuthor },
        {
          $addToSet: {
            songs: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});