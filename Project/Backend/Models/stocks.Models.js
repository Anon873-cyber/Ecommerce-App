const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },

    description: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    discountPrice: {
        type: Number,
        default: 0
    },

    stock: {
        type: Number,
        required: true,
        default: 0
    },

    category: {
        type: String,
        required: true
    },

    brand: {
        type: String
    },

    images: [
        {
            url: String
        }
    ],

    ratings: {
        type: Number,
        default: 0
    },

    numReviews: {
        type: Number,
        default: 0
    },

    isActive: {
        type: Boolean,
        default: true
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Product', stockSchema);