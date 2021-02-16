import asyncHandler from 'express-async-handler'
import Promo from '../models/PromoModel.js'

const getPromos = asyncHandler(async (req, res) => {
  const promos = await Promo.find({})
  if (promos) res.json(promos)
  else {
    throw new Error('Cannot find products')
  }
})

export { getPromos }
