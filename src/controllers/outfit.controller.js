import Outfit from '../models/Outfit.js'

export const getAll = async (req, res) => {
  const items = await Outfit.find({ userId: req.userId })
    .populate('slots.head slots.top slots.over slots.bottom slots.shoes slots.acc')
  res.json(items)
}

export const create = async (req, res) => {
  try {
    console.log('Body recibido:', req.body)
    console.log('UserId:', req.userId)
    const item = await Outfit.create({ ...req.body, userId: req.userId })
    res.status(201).json(item)
  } catch (error) {
    console.log('Error:', error.message)
    res.status(400).json({ message: error.message })
  }
}

export const remove = async (req, res) => {
  try {
    await Outfit.findOneAndDelete({ _id: req.params.id, userId: req.userId })
    res.json({ message: 'Atuendo eliminado' })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}