const mongoose = require('mongoose');

// Booking schema
const bookingSchema = new mongoose.Schema({
  professional: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Profile',
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Login',  // Reference to the Login model (user login details)
    required: true
  },
  service: {
    type: String
  },
  date: {
    type: Date,
    required: true
  },
  timeSlot: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'completed', 'cancelled'],
    default: 'pending',
  },
  paymentStatus: {
    type: String,
    enum: ['paid', 'unpaid', 'pending'],
    default: 'unpaid',
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
});

module.exports = mongoose.model('Booking', bookingSchema);
