import { Schema, model } from 'mongoose'

const templateSchema = new Schema({
    key: { type: String, required: true, unique: true},
    label : { type: String, required: true},
    category: { type: String, required: true},
    svg: { type: String, required: true},
})

export default model('Template', templateSchema);