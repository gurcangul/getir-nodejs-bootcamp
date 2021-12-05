const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 50,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      //match: [/^(([^<>()[]\.,;:\s@"]+(.[^<>()[]\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/,"Please provide valid email"],
    },
    password: {
      type: String,
      required: true,
      minLength: 6,
      maxLength: 40,
    },
  },
  { timestamps: true, versionKey: false }
);

module.exports = mongoose.model("User", UserSchema);
