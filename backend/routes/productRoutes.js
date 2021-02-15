import express, { Router } from 'express'
import { getProducts } from '../controllers/productController.js'
const router = express.Router()

router.get('/', getProducts)

export default router
