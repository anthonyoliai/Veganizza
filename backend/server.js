import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import promoRoutes from './routes/promoRoutes.js'
import postRoutes from './routes/postRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
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
app.use('/api/users/', userRoutes)
app.use('/api/orders', orderRoutes)
app.get('/api/config/paypal', (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
)

const __dirname = path.resolve()
app.use('/animations', express.static(path.join(__dirname, '/animations')))

const PORT = process.env.PORT || 5000
app.listen(PORT)

console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}...`)
