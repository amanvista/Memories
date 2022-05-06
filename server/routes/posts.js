import express from 'express';
import { getPosts } from '../controllers/posts.js';
//import { getPosts, getPost, createPost, updatePost, likePost, deletePost } from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPosts)

export default router;