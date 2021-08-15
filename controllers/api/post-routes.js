const router = require('express').Router();
const { Post, User, Comment } = require('../../models');
const withAuth = require('../../utils/auth');
//const multer = require('multer');
const upload = require('../../config/multer.js');
//const { request } = require('express');
const path = require('path');
const fileWorker = require('../../controllers/api/');

//define storage for the images
/*
const ImgStorage = multer.diskStorage({
  //file destination
  destination: function (req, file, callback) {
    callback(null, '/public/images/');
  },
  filename: function (req, file, callback) {
    console.log('file in filename ', file);
    callback(
      null,
      file.originalname + '-' + Date.now() + path.extname(file.originalname)
    );
  },
});
*/

/*
const ImgStorage = multer.memoryStorage();
//upload parametars for multer
const upload = multer({ storage: ImgStorage });
*/
// get all users
router.get('/', (req, res) => {
  console.log('======================');
  Post.findAll({
    attributes: [
      'id',
      'car_maker',
      'car_model',
      'car_body',
      'review',
      'created_at',
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username'],
        },
      },
      {
        model: User,
        attributes: ['username'],
      },
    ],
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id,
    },
    attributes: [
      'id',
      'car_maker',
      'car_model',
      'car_body',
      'review',
      'created_at',
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username'],
        },
      },
      {
        model: User,
        attributes: ['username'],
      },
    ],
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

/* old post
router.post('/', withAuth, (req, res) => {
  console.log(req.files);
  Post.create({
    car_maker: req.body.car_maker,
    car_model: req.body.car_model,
    car_body: req.body.car_body,
    review: req.body.review,
    car_img: req.files.img_car,
    user_id: req.session.user_id,
  })
 */
//const upload = multer().single('post-img')

router.post('/', withAuth, upload.single('car_img'), function (req, res, next) {
  console.log(req);
  Post.create({
    car_maker: req.body.car_maker,
    car_model: req.body.car_model,
    car_body: req.body.car_body,
    review: req.body.review,
    type: req.file.mimetype,
    car_img: req.file.originalname,
    data: req.file.buffer,
    user_id: req.session.user_id,
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', withAuth, (req, res) => {
  Post.update(
    {
      review: req.body.review,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', withAuth, (req, res) => {
  console.log('id', req.params.id);
  Post.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
