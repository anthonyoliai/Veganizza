import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'

const userLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body
  console.log(email)
  const user = await User.findOne({ email: email })
  console.log(`User equals ${user}`)
  if (user && user.matchPassword(password)) {
    res.json({
      _id: user._id,
      username: user.username,
      email: user.email,
      isAdmin: user.isAdmin,
    })
  } else {
    res.status(401)
    throw new Error('Invalid email or password')
  }
})

const userRegister = asyncHandler(async (req, res) => {
  const { email, password, username } = req.body
  const userExists = await User.findOne({ email: email })
  if (userExists) {
    res.status(400)
    throw new Error('User already exists!')
  }
  const user = await User.create({ username, email, password })
  if (user) {
    res.status(201).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      isAdmin: user.isAdmin,
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})

export { userLogin, userRegister }
