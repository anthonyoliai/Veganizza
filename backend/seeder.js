import connectDB from './config/db.js'
import Product from './models/productModel.js'
import products from './data/products.js'
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

importProducts()
