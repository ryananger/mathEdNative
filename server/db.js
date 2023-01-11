const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/mathEd';
const options = {useNewUrlParser: true, useUnifiedTopology: true};

mongoose.set('strictQuery', true);
mongoose.connect(url, options);

const userSchema = new mongoose.Schema({
  username:     String,
  sessionId:    String,
  highScore:    Number
});

const User = new mongoose.model('User', userSchema);
User.createCollection();

userSchema.options.toObject = {};
userSchema.options.toObject.transform = function(doc, ret) {
  delete ret._id;
  delete ret.__v;

  return ret;
};

module.exports = User;