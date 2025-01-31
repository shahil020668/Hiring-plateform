const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    customerName: { type: String, required: true }, // Name of the customer
    rating: { type: Number, required: true, min: 1, max: 5 }, // Rating (1-5)
    comment: { type: String }, // Review comment
    createdAt: { type: Date, default: Date.now }, // Timestamp of the review
    customerImg: {type: String},
  });

  module.exports = mongoose.model('Review', reviewSchema);