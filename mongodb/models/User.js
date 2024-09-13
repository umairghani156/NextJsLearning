import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: [true, "Add the first Name"],
        unique: true,
        trim: true,
        minlength: 3,
        maxlength: 20,
    },
    lastName:{
        type: String,
        required: [true, "Add the last Name"],
        trim: true,
        minlength: 3,
        maxlength: 20,
    },
    email:{
        type: String,
        required: [true, "Plz add your email"],
        unique: true,
        trim: true,
        lowercase: true,
    },
    password:{
        type: String,
        required:  [true, "Add your password"],
        minlength: 8,
    },
    expiresIn: {
        type: Date
    },
    isVerified:{
        type: Boolean,
        default: false
    }
},
{
    timestamps: true
})

export default mongoose.model('User', userSchema);