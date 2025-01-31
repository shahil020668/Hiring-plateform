const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
});

// Override the collection name to be singular
const services = mongoose.model('services', serviceSchema,);  // The third parameter defines the collection name explicitly.

module.exports = services;
