import Promo from '../models/promoModel.js'
import asyncHandler from 'express-async-handler'

const getPromos = asyncHandler(async (req, res) => {
  const promos = await Promo.find({})
  if (promos) res.json(promos)
  else {
    throw new Error('Cannot find products')
  }
})

export { getPromos }
