import Clothing from '../models/Clothing.js'

export const getAll = async (req, res) => {
    const items = await Clothing.find({ userId: req.userId })
    res.json(items)
    }

    export const create = async (req, res) => {
    try {
        console.log('Body recibido:', req.body)
        console.log('UserId:', req.userId)
        const item = await Clothing.create({ ...req.body, userId: req.userId })
        res.status(201).json(item)
    } catch (error) {
        console.log('Error:', error.message)
        res.status(400).json({ message: error.message })
    }
    }

    export const remove = async (req, res) => {
    try {
        await Clothing.findOneAndDelete({ _id: req.params.id, userId: req.userId })
        res.json({ message: 'Prenda eliminada' })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }


}