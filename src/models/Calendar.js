import { Schema, model } from 'mongoose'

const calendarEntrySchema = new Schema({
  userId:   { type: Schema.Types.ObjectId, ref: 'User', required: true },
  date:     { type: String, required: true }, // formato "YYYY-MM-DD"
  outfitId: { type: Schema.Types.ObjectId, ref: 'Outfit', required: true },
}, { timestamps: true })

// Un solo outfit por día por usuario
calendarEntrySchema.index({ userId: 1, date: 1 }, { unique: true })

export default model('Calendar', calendarEntrySchema)