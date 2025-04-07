import mongoose from "mongoose";

const vendorSchema = mongoose.Schema({
    name: {
        type: String,
        required:[true,"name required"]
    },
    vendorid: {
        type: String,
        required: [true, "id-Required"]
    },
    phone: {
        type: String,
        required: [true, "Phonenumber Required"],
    },
    email: {
        type: String,
        unique: true,
        required: [true, "Email Required"],

    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "VENDOR"
    }
}, 
 { timestamps: true });
 
 const vendorModel = mongoose.model("vendorModel", vendorSchema);
 
 export default vendorModel;

