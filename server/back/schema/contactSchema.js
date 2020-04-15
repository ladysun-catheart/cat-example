const { Schema } = require('mongoose')

const contactSchema = new Schema({
  user: { type: String },
  mail: { type: String },
  content: { type: String },
})

module.exports = contactSchema