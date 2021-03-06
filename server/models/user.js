const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema ({
  profileId: {type: Number, required: true},
  name: {type: String, required: true},
  accessToken: {type: String, required: true},
  avatar: {type: String, required: true}
},
{
  timestamps: true
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
