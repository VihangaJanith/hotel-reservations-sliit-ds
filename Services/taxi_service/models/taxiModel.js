const mongoose = require('mongoose');



const taxiSchema =  mongoose.Schema({
    id: {
        type: "string",

    },
    userid: {
        type: "string",

    },
    name: {
        type: "string",
        default: "User0",
    },
    email: {
        type: "string",
        require
    },
    address: {
        type: "string",
        require
    },
    date: {
        type: "string",
        require,
        default: "not booked"
    },
    phone: {
        type: "Number",
        require,
    }
},
{
    timestamps: true
})



module.exports = mongoose.model("taxiUsers",taxiSchema)
