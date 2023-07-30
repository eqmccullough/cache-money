const { Schema, model } = require("mongoose");

const profileSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  categories: [
    {
      type: Schema.Types.ObjectId,
      ref: "Category",
    },
  ], 
});

const Profile = model("Profile", profileSchema);
