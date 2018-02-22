const { ObjectID } = require('mongodb');
const { Post } = require('../../models/post');

const posts = [
  {
    _id: new ObjectID(),
    title: 'First post example',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At atque dolorem nihil quis.'
  },
  {
    _id: new ObjectID(),
    title: 'Second post example',
    text: 'Ad delectus dolore eaque enim et illo, illum iusto, modi molestiae natus nisi praesentium quis sapiente, tenetur?'
  }
];

const populatePosts = (done) => {
  Post.remove({}).then(() => {
    return Post.insertMany(posts);
  }).then(() => done());
};

module.exports = { posts, populatePosts };
