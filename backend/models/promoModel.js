import mongoose from 'mongoose'
const { Schema } = mongoose

const promoSchema = new Schema({
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
})

const Promo = mongoose.model('Promo', promoSchema)

export default Promo
