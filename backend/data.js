const mongoose = require('mongoose');
const dataschema = mongoose.Schema({
    name: {
        type: String,
    }, age: {
        type: Number,

    }, address: {

        type: String,

    }, phone: {

        type: Number,

    }, email: {

        type: String,

    }, gender: {

        type: String,
    }, bloodgroup: {
 type: String,
    }
})

module.exports = mongoose.model('divinedata', dataschema);