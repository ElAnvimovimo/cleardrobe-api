import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './src/config/db.js'
import authRoutes from './src/routes/auth.routes.js'
import clothingRoutes from './src/routes/clothing.routes.js'
import outfitRoutes from './src/routes/outfit.routes.js'
import calendarRoutes from './src/routes/calendar.routes.js'

dotenv.config()
connectDB()

const app = express()

app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://cleardrobe.vercel.app'
  ]
}))
app.use(express.json())

app.get('/', (req, res) => {
  res.json({ message: 'Cleardrobe API corriendo' })
})

app.use('/api/auth', authRoutes)
app.use('/api/clothes', clothingRoutes)
app.use('/api/outfits', outfitRoutes)
app.use('/api/calendar', calendarRoutes)

app.listen(process.env.PORT, '0.0.0.0', () => {
  console.log(`Servidor en puerto ${process.env.PORT}`)
})