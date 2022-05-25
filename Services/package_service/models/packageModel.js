const mongoose = require('mongoose');



const packageSchema =  mongoose.Schema({
    name: {
        type: "string",
        require
    },
    varients: [],
    prices: [],
    category: {
        type: "string",
        require
    },
    image: {
        type: "string",
        require
    },
    description: {
        type: "string",
        require
    }
},
{
    timestamps: true
})

const packageModel =  mongoose.model("HotelPackages",packageSchema)

module.exports = packageModel
