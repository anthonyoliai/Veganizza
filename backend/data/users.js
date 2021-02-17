import bcrypt from 'bcryptjs'
const users = [
  {
    username: 'aoi350',
    email: 'anthonyoliai@gmail.com',
    password: bcrypt.hashSync('1232456', 10),
    isAdmin: 'true',
  },
  {
    username: 'aoi360',
    email: 'anthonyoliai1@gmail.com',
    password: bcrypt.hashSync('1232456', 10),
  },
]

export default users
