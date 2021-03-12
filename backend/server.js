import connectDB from './config/db.js'
import dotenv from 'dotenv'
import express from 'express'
import orderRoutes from './routes/orderRoutes.js'
import path from 'path'
import postRoutes from './routes/postRoutes.js'
import productRoutes from './routes/productRoutes.js'
import promoRoutes from './routes/promoRoutes.js'
import userRoutes from './routes/userRoutes.js'

dotenv.config()
const app = express()
app.use(express.json())

connectDB()

app.use('/api/products/', productRoutes)
app.use('/api/promos', promoRoutes)
app.use('/api/posts', postRoutes)
app.use('/api/users/', userRoutes)
app.use('/api/orders/', orderRoutes)
app.get('/api/config/paypal', (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
)
const __dirname = path.resolve()
app.use('/animations', express.static(path.join(__dirname, '/animations')))

app.use(express.static(path.join(__dirname, '/frontend/veganizza-app/build')))
app.get('*', (req, res) =>
  res.sendFile(
    path.resolve(__dirname, 'frontend', 'veganizza-app', 'build', 'index.html')
  )
)

const PORT = process.env.PORT || 5000
app.listen(PORT)

console.log(`Server running on port ${PORT}...`)
