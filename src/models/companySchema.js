const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: false
  },
  description: {
    type: String,
    required: false
  },
  createdAt: {
    type: Date,
    defaut: new Date()
  }
});

module.exports = mongoose.model('company', companySchema);
