const mongoose = require('mongoose');

const initiativeSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  modality: {
    type: String,
    required: true
  },
  duration: {
    type: String,
    required: true
  },
  requirements: {
    type: String,
    required: false
  },
  additionalInfo: {
    type: String,
    required: false
  },
  contactInfo: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('initiative', initiativeSchema);
