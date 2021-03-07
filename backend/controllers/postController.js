import asyncHandler from 'express-async-handler'
import Post from '../models/postModel.js'

const getPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find({})
  if (posts) res.json(posts)
  else {
    throw new Error('Cannot find posts')
  }
})

const getPost = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id)
  if (post) res.json(post)
  else {
    throw new Error('Cannot find post')
  }
})

export { getPosts, getPost }
