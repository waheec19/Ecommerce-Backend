const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'watches',
  },
  {
    tag_name: 'rings',
  },
  {
    tag_name: 'blue',
  },
  {
    tag_name: 'red',
  },
  {
    tag_name: 'green',
  },
  {
    tag_name: 'white',
  },
  {
    tag_name: 'gold',
  },
  {
    tag_name: 'necklaces',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;