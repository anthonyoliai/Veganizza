import connectDB from './config/db.js'
import Product from './models/productModel.js'
import Promo from './models/promoModel.js'
import promos from './data/promos.js'
import products from './data/products.js'
import Post from './models/postModel.js'
import posts from './data/posts.js'
import User from './models/userModel.js'
import users from './data/users.js'
import dotenv from 'dotenv'

dotenv.config()
connectDB()

const importProducts = async () => {
  try {
    await Product.deleteMany()
    const createdProducts = await Product.insertMany(products)
    console.log('Products imported')
    process.exit()
  } catch (error) {
    console.log('Error!' + error)
    process.exit(1)
  }
}

const importPromos = async () => {
  try {
    await Promo.deleteMany()
    const createdPromos = await Promo.insertMany(promos)
    console.log('Promos imported')
    process.exit()
  } catch (error) {
    console.log('Error!' + error)
    process.exit(1)
  }
}

const importPosts = async () => {
  try {
    await Post.deleteMany()
    const createdPosts = await Post.insertMany(posts)
    console.log('Posts imported')
    process.exit()
  } catch (error) {
    console.log('Error!' + error)
    process.exit(1)
  }
}

const importUsers = async () => {
  try {
    await User.deleteMany()
    const createdUsers = await User.insertMany(users)
    console.log('Users imported')
    process.exit()
  } catch (error) {
    console.log('Error' + error)
    process.exit(1)
  }
}

importProducts()
importPromos()
importPosts()
importUsers()
