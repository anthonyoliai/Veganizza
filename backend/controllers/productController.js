import asyncHandler from 'express-async-handler'
import Product from '../models/ProductModel.js'

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({})
  if (products) res.json(products)
  else {
    throw new Error('Cannot find products')
  }
})

export { getProducts }
