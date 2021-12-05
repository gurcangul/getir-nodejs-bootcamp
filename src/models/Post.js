const mongoose = require("mongoose");

const PostSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      minLength: 5,
    },
    description: {
      type: String,
      required: true,
      minLength: 5,
    },
    author: {
      type: mongoose.Types.ObjectId,
      userId: [{ type: mongoose.Types.ObjectId, ref: "User" }],
      required: true,
      minLength: 5,
    },
  },
  { timestamps: true, versionKey: false }
);

module.exports = mongoose.model("Post", PostSchema);
