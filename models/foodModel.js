import mongoose from 'mongoose';

const foodSchema = new mongoose.Schema({
    foodid: {
        type: String,
    },
    name: {
        type: String,
        allowNull: false
    },
    description: {
        type: String
    },
    price: {
        type: String,
        allowNull: false
    },
    category: {
        type: String
    },
    available: {
        type: Boolean,
        defaultValue: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "food"
    }
},  { timestamps: true });
 
    const foodModel = mongoose.model("foodModel", foodSchema);
    
    export default foodModel;