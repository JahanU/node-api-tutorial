const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
    },
    age: {
        type: Number,
    },
})

module.exports = mongoose.model('Posts', PostSchema);