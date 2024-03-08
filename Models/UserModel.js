const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const crypto = require('crypto');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, "password is required"],
    minlength: 8,
    Selection: false,
    trim: true,
  },
  confirmPassword: {
    type: String,
    required: [true, "confirmPassword is required"],
    validate: {
        validator: function (el) {
            return el === this.password;
        },
    },
    Selection: false,
    trim: true,
  },
  creationDate: {
    type: Date,
    default: Date.now(),
  },
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
});

userSchema.pre('save', async function(next){
if(!this.isModified('password'))return next();
this.password = await bcrypt.hash(this.password, 12);
this.confirmPassword = undefined;
})

userSchema.methods.correctPassword = async function (candidatePassword, userPassword){
    return await bcrypt.compare(candidatePassword, userPassword)
}

userSchema.methods.createPasswordResetToken= async function () {
  const resetToken = crypto.randomBytes(32).toString('hex');
  this.passwordResetToken = crypto.createHash('sha256').update(resetToken).digest('hex');
  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;
  return resetToken;
}

const User = mongoose.model("User", userSchema);

module.exports = User;