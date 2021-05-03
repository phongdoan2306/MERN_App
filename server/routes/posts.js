const express = require('express');
const getPosts = require('../controllers/PostsController/getPosts');
const createPost = require('../controllers/PostsController/createPost');
const updatePost = require('../controllers/PostsController/updatePost');

const router = express.Router();


router.get('/', getPosts);
router.post('/', createPost);
router.post('/update', updatePost);

module.exports = router;