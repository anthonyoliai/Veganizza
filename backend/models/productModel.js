import mongoose from 'mongoose'
const { Schema } = mongoose

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    default: 0,
  },
  topSeller: {
    type: Boolean,
    required: true,
    default: false,
  },
})

const Product = mongoose.model('Product', productSchema)

export default Product
