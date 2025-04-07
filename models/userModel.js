import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username Required"],
  },
  phonenumber: {
    type: String,
    required: [true, "Phonenumber Required"],
  },
  email: {
    type: String,
    required: [true, "Email Required"],
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  gender:{
    type: String,
    enum:['Male', 'Female' ]
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
}
}, {timestamps: true});

const userModel = mongoose.model("userModel", userSchema);

export default userModel;