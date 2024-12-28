const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        minLength: [4, "Name must be at least 3 characters"],
        maxLength: [20, "Name must be at most 20 characters"],
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/
    },
    password: {
        type: String,
        required: true,
        minLength: [8, "Password must be at least 8 characters"],
    },
    role: {
        type: String,
        required: true,
        enum: ['admin', 'user'],
    }
}, {
    timestamps: true
});

const usersModel = mongoose.models.user || mongoose.model('user', schema);

export default usersModel;