const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema({
    provider: { type: mongoose.Schema.Types.ObjectId, ref: 'Profile' }, // Reference to the service provider
    imageUrl: { type: String, required: true }, // Image URL or path
    title: { type: String }, // Optional title for the portfolio image
  });
  
  module.exports = mongoose.model('Portfolio', portfolioSchema);
  