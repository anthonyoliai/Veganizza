import asyncHandler from 'express-async-handler'
import Post from '../models/postModel.js'

const getPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find({})
  if (posts) res.json(posts)
  else {
    throw new Error('Cannot find posts')
  }
})

export { getPosts }
