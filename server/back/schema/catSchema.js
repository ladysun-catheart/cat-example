const { Schema } = require('mongoose')

const catSchema = new Schema({
  name: { type: String },
  sex: { type: String, enum: ['male', 'female'] },
  birthday: { type: Number },
  description: { type: String },
})

module.exports = catSchema