const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    freecodecamp: {type: String, required: true},
    codewars: {type: Number, required: true},
    typing: {type: Number, required: true},
    blogpost: {type: String,required: true}
}, {
    timestamps: true
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;