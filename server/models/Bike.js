const {Schema, model } = require('mongoose')

const schema = new Schema ({
   name:{type: String},
   type:{type: String },
   price:{type: Number },
   isRented:{type: Boolean, default:false }
})

module.exports = model('Bike', schema)