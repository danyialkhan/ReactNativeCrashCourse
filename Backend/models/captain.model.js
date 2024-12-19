const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const captainSchema = new mongoose.Schema({
    fullName: {
        firstName: {
            type: String,
            required: true,
            minLength: [3, 'first name must be at-least 3 characters.  ']
        },
        lastName: {
            type: String,
            required: false,
            minLength: [3, 'last name must be at-least 3 characters.  ']
        },
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        minLength: [3, 'email  must be at-least 3 characters.  ']
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    socketId: {
        type: String,
    },
    status: {
        type: String,
        enum: ['active', 'inActive'],
        default: 'inActive '
    },
    vehicle: {
        color: {
            type: String,
            required: true,
            minLength: [3, 'color must be at-least 3 characters.  ']
        },
        plate: {
            type: String,
            required: true,
            minLength: [3, 'color must be at-least 3 characters.  ']
        },
        capacity: {
            type: Number,
            required: true,
            minLength: [1, 'capacity must be at-least 1 characters.  ']
        }, 
        vehicleType: {
            type: String,
            required: true,
            enum: ['car', 'motorcycle', 'auto'],
            default: 'car'
        }
    }, 
    location: {
        lat: {
            type: Number,
            required: true
        },
        long: {
            type: Number,
            required: true
        }
    }
});

captainSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
    return token;
}

captainSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

captainSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
}

const captainModel = mongoose.model('Captain', captainSchema);

exports.captainModel = captainModel; 