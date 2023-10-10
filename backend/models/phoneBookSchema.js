import mongoose from "mongoose";

const PhoneBookSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },

    phone_number: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now(),
      },
      createdUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
      lastChangedAt: {
        type: Date,
        default: Date.now(),
      },
      lastChangedUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      }
})

const PhoneBookModel = new mongoose.model("Form", PhoneBookSchema)

export default PhoneBookModel;