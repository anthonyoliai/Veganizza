import mongoose from 'mongoose'
const { Schema } = mongoose

const promoSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
})

const Promo = mongoose.model('Promo', promoSchema)

export default Promo
