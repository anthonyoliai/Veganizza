import express, { Router } from 'express'
import { getPromos } from '../controllers/promoController.js'

const router = express.Router()

router.get('/', getPromos)

export default router
