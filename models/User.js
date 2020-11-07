const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter your name. This will be displayed on your profile'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        trim: true,
        lowercase: true,
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: 4,
        unique: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    habits: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Habit"
        }
    ]
}, {timestamps: true});

const User = mongoose.model('User', userSchema);
module.exports = User;