const mongoose = require('mongoose')

const Buy = mongoose.Schema({
    date: {
        type: Date,
        default: Date.now
    },
    user: {
        type: string,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    gateway: {
       type: String,
       required: true
    }
})