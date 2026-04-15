import { Schema, model } from 'mongoose'

const outfitSchema = new Schema({
  userId:   { type: Schema.Types.ObjectId, ref: 'User', required: true },
  name:     { type: String, required: true },
  slots: {
    head:   { type: Schema.Types.ObjectId, ref: 'Clothing', default: null },
    top:    { type: Schema.Types.ObjectId, ref: 'Clothing', default: null },
    over:   { type: Schema.Types.ObjectId, ref: 'Clothing', default: null },
    bottom: { type: Schema.Types.ObjectId, ref: 'Clothing', default: null },
    shoes:  { type: Schema.Types.ObjectId, ref: 'Clothing', default: null },
    acc:    [{ type: Schema.Types.ObjectId, ref: 'Clothing' }],
  },
  occasion: { type: String, enum: ['casual', 'formal', 'trabajo', 'fiesta', 'playa', 'casa'] },
  season:   { type: String, enum: ['spring', 'summer', 'fall', 'winter'] },
  notes:     String,
  wornDates: [Date],
}, { timestamps: true })

export default model('Outfit', outfitSchema)