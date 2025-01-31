const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;

const profileSchema = new mongoose.Schema({
    name: { type: String, required: true },
    profession: { type: String, required: true }, 
    location: { type: String, required: true },
    ratings: { type: Number, default: 0 },
    reviewsCount: { type: Number, default: 0 },
    certifications: [String],
    about: { type: String },
    services: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Service' }],
    portfolio: [String],
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
    pricing: {
      basicInspection: { type: Number, required: true },
      fullDayService: { type: Number, required: true },
      emergencyService: { type: Number, required: true },
    },
    profileImage: { type: String },
    availability: [
      {
          day: String,
          selected: Boolean,
          times: [{
              startTime: String,
              endTime: String
          }]
      }
    ]
});

// Create the model
const Profile = mongoose.model("Profile", profileSchema);

// Export the model
module.exports = Profile;