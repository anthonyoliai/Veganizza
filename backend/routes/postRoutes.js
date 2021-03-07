import express, { Router } from 'express'
import { getPosts, getPost } from '../controllers/postController.js'
const router = express.Router()

router.get('/', getPosts)
router.get('/:id', getPost)
export default router
