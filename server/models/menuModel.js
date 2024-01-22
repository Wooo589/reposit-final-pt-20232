import mongoose from "mongoose";

const itemSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        price: {
            type: Number,   
            required: true,
        },
        photo: {
            type: String,
            required: true,
            unique: true,
        }
    },
    {
        timestamps: true,
    }
)

export default mongoose.model('Item', itemSchema);
