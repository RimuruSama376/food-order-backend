import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import Menu from './models/menuSchema.js'
import Orders from './models/orderSchema.js'
import dotenv from 'dotenv'
dotenv.config();

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', async (req, res) => {
  try {
    const menu = await Menu.find({})
    res.status(200).json(menu)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

app.post('/', async (req, res) => {
  try {
    console.log(req.body)
    const menu = await Menu.create(req.body)
    res.status(200).json(menu)
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ message: error.message })
  }
})

app.post('/many', async (req, res) => {
  try {
    const menuItems = req.body

    const createdMenuItems = await Menu.insertMany(menuItems)

    res.status(201).json(createdMenuItems)
  } catch (error) {
    console.error(error.message)
    res.status(500).json({ message: error.message })
  }
})

app.post('/post-order', async (req, res) => {
  try {
    const newOrder = req.body
    const newOrders = await Orders.insertMany(newOrder)
    res.status(201).json(newOrders)
  } catch (error) {
    console.error(error.message)
    res.status(500).json({ message: error.message })
  }
})

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(3001, () => {
      console.log('app running on port 3001')
    })
    console.log('connected successfully')
  })
  .catch((error) => console.log(error))
