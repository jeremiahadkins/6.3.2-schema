const mongoose = require('mongoose');
const hatSchema = new mongoose.Schema({

  name: {type: String, required: true},
  size: Number,
  materials: {
    primary: {type: String},
    secondary: {type: String,}
  },
  styles: [String]
});

const Hat = mongoose.model('Hat', hatSchema);

module.exports = Hat;
