const mongoose = require("mongoose");

const Userschema = new mongoose.Schema({
        usertype: {
            type: String
        },
        email: {
            type: String
        },
        password: {
            type: String
        },

        date: {
            type: Date,
            default: Date.now
        },
        mcapacity: {
            type: Number
        },
        dcapacity: {
            type: Number
        },
        material: {
            type: String
        },
        location: {
            type: String
        },
        designertype: {
            type: String
        },
        training: {
            type: String
        },
        image: {
            type: String
        },
        imageID: {
            type: String
        }
    },

    {
        timestamps: true
    }
);

module.exports = mongoose.model("User", Userschema);