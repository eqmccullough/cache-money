const { Schema, model } = require("mongoose");

const itemSchema = new Schema({
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    amount: {
        type: Number,
        required: true,
    }
  });
  
  const Item = model('Item', itemSchema);
  
  module.exports = Item