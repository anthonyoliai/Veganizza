import asyncHandler from 'express-async-handler'
import Post from '../models/postModel.js'

const userLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body
  const user = await Post.findOne({ email })
  if (user && user.matchPassword(password)) {
    res.json({
      username: user.username,
      email: user.email,
      isAdmin: user.isAdmin,
    })
  } else {
    res.status(401)
    throw new Error('Invalid email or password')
  }
})

export { getPosts }
