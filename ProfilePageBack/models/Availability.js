import mongoose from 'mongoose';

const availabilitySchema = new mongoose.Schema({
  day : [{ type: String }],
  timeSlots: [{ type: String }],
});

export default mongoose.model('Availability', availabilitySchema);