const mongoose = require('mongoose');



const userSchema =  mongoose.Schema({
    name: {
        type: "string",
        default: "User0",
    },
    email: {
        type: "string",
        require
    },
    password: {
        type: "string",
        require
    },
    isAdmin: {
        type: "boolean",
        require,
        default: false
    },
    isHotelAdmin: {
        type: "boolean",
        require,
        default: false
    },
    phone: {
        type: "Number",
        require,
    }
},
{
    timestamps: true
})



module.exports = mongoose.model("user",userSchema)
