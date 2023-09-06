import mongoose from "mongoose";

const PhoneBookSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },

    phone_number: {
        type: Number,
        required: true
    }
})

const PhoneBookModel = new mongoose.model("Form", PhoneBookSchema)

export default PhoneBookModel;