const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({

    description: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    category:{
        type:String,
    }

})


const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;