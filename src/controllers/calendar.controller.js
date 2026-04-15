import CalendarEntry from '../models/Calendar.js'

// GET /api/calendar?month=2025-04
// Devuelve todas las entradas del mes indicado
export const getMonth = async (req, res) => {
  try {
    const { month } = req.query // "YYYY-MM"
    if (!month) return res.status(400).json({ message: 'El parámetro month es requerido' })

    const entries = await CalendarEntry.find({
      userId: req.userId,
      date:   { $regex: `^${month}` },
    }).populate('outfitId')

    res.json(entries)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// PUT /api/calendar/:date
// Asigna (o reemplaza) el outfit de un día
export const assign = async (req, res) => {
  try {
    const { date } = req.params       // "YYYY-MM-DD"
    const { outfitId } = req.body

    const entry = await CalendarEntry.findOneAndUpdate(
      { userId: req.userId, date },
      { userId: req.userId, date, outfitId },
      { upsert: true, new: true }
    ).populate('outfitId')

    res.json(entry)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

// DELETE /api/calendar/:date
// Quita el outfit asignado a un día
export const remove = async (req, res) => {
  try {
    await CalendarEntry.findOneAndDelete({ userId: req.userId, date: req.params.date })
    res.json({ message: 'Entrada eliminada' })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}