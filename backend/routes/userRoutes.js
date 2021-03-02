import express, { Router } from 'express'
import { userLogin, userRegister } from '../controllers/userController.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router()

router.post('/register', protect, userRegister)
router.post('/login', userLogin)

export default router
