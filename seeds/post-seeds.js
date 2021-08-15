const { Post } = require('../models');

const postdata = [
  {
    review: 'Donec posuere metus vitae ipsum.',
    car_img: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
    car_maker: 'Audi',
    car_model: 'A4',
    car_body: 'SUV',
    user_id: 6,
  },
  {
    review: 'Morbi non quam nec dui luctus rutrum.',
    car_img: 'https://nasa.gov/donec.json',
    car_maker: 'Audi',
    car_model: 'A6',
    car_body: 'convertable',
    user_id: 8,
  },
  {
    review:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    car_img:
      'https://europa.eu/parturient/montes/nascetur/ridiculus/mus/etiam/vel.aspx',
    car_maker: 'BWM',
    car_model: 'X5',
    car_body: 'SUV',
    user_id: 1,
  },
  {
    review: 'Morbi non quam nec dui luctus rutrum.',
    car_img: 'https://nasa.gov/donec.json',
    car_maker: 'Audi',
    car_model: 'A6',
    car_body: 'convertable',
    user_id: 2,
  },
  {
    review:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    car_img:
      'https://europa.eu/parturient/montes/nascetur/ridiculus/mus/etiam/vel.aspx',
    car_maker: 'BWM',
    car_model: 'X5',
    car_body: 'SUV',
    user_id: 3,
  },
  {
    review: 'Morbi non quam nec dui luctus rutrum.',
    car_img: 'https://nasa.gov/donec.json',
    car_maker: 'Audi',
    car_model: 'A6',
    car_body: 'convertable',
    user_id: 4,
  },
  {
    review:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    car_img:
      'https://europa.eu/parturient/montes/nascetur/ridiculus/mus/etiam/vel.aspx',
    car_maker: 'BWM',
    car_model: 'X5',
    car_body: 'SUV',
    user_id: 5,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
