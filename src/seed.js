import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import dotenv from 'dotenv'
import User from './models/User.js'

dotenv.config()
await mongoose.connect(process.env.MONGO_URI)

await User.deleteMany()

await User.insertMany([
  { name: 'Admin', email: 'admin@cleardrobe.com', password: await bcrypt.hash('123456', 10) },
  { name: 'Test',  email: 'test@cleardrobe.com',  password: await bcrypt.hash('123456', 10) },
])

console.log('Usuarios creados')
await mongoose.disconnect()