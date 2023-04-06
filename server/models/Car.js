const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    brand: {
        type: String,
        required: [true, 'Brand is required!'],
    },
    model: {
        type: String,
        required: [true, 'Model is required!'],
    },
    year: {
        type: Number,
        required: [true, 'Year is required!'],
    },
    image: {
        type: String,
        required: true,
        validate: /^https?:\/\//,
    }
});

const Car = mongoose.model('Car', carSchema);

module.exports = Car;