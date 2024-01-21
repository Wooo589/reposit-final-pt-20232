import mongoose from "mongoose";

const userSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            index: {
                unique: true,
            } 
        },
        password: {
            type: String,
            required: true,
            index: {
                unique: true,
            }
        },
        role: {
            type: String,
            enum: ['admin', 'user'],
            default: 'user',
        }
    },
    {
        timestamps: true,
    }
)

export default mongoose.model('User', userSchema);