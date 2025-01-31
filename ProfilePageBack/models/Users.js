const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Login schema
const loginSchema = new mongoose.Schema({
  email: { 
    type: String, 
    required: true, 
    unique: true, 
    lowercase: true, 
    match: [/\S+@\S+\.\S+/, 'Please provide a valid email address'] 
  }, // Email (used for login)
  
  password: { 
    type: String, 
    required: true, 
    minlength: 6  // Ensure password is at least 6 characters long
  }, // Password (hashed for security)
  
  lastLogin: { 
    type: Date 
  }, // Timestamp of the last login

  failedAttempts: { 
    type: Number, 
    default: 0 
  }, // Track failed login attempts (for security)

  isLocked: { 
    type: Boolean, 
    default: false 
  }, // Account lock flag after multiple failed login attempts

  role: { 
    type: String, 
    enum: ['user', 'admin', 'moderator'], 
    default: 'user' 
  }, // User role (can be extended to manage permissions)
  
  createdAt: { 
    type: Date, 
    default: Date.now 
  }, // When the account was created
});

// Hash the password before saving the user
loginSchema.pre('save', async function(next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

// Method to compare entered password with hashed password
loginSchema.methods.comparePassword = function(password) {
  return bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('Login', loginSchema);
