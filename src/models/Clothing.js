import { Schema, model } from 'mongoose'

const clothingSchema = new Schema({
  userId:    { type: Schema.Types.ObjectId, ref: 'User', required: true },
  name:      { type: String, required: true },
  svgKey:    { type: String, default: null },
  mainColor: { type: String, default: '#cccccc' },
  material:  { type: String },
  category:  { type: String, enum: ['head', 'top', 'over', 'bottom', 'shoes', 'acc_neck', 'acc_belt', 'acc_ear', 'acc_glasses', 'acc_bag', 'acc_watch'] },
  seasons:   [{ type: String, enum: ['spring', 'summer', 'fall', 'winter'] }],
  tags:      [String],
  imageUrl:  { type: String, default: '' },
  timesWorn: { type: Number, default: 0 },
  wornDates: [Date],
}, { timestamps: true })

export default model('Clothing', clothingSchema)