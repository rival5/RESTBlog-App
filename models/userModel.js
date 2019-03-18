const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: String,
  googleId: String
});

module.exports = mongoose.model('User', userSchema);
