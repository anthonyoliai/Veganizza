import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import promoRoutes from './routes/promoRoutes.js'
import postRoutes from './routes/postRoutes.js'
//import { notFound, errorHandler } from './middleware/errorMiddleware.js'
dotenv.config()
const app = express()
app.use(express.json())

connectDB()

app.get('/', (req, res) => {
  res.send('API is running')
})

app.use('/api/products/', productRoutes)
app.use('/api/promos', promoRoutes)
app.use('/api/posts', postRoutes)
const PORT = process.env.PORT || 5000
app.listen(PORT)

console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}...`)