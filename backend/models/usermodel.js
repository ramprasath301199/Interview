const mongoose = require("mongoose")
const UserSchema = new mongoose.Schema({
    FirstName: {
        type: String
    },
    LastName: {
        type: String
    },
    Email: {
        type: String
    },
    Mobile: {
        type: Number
    },
    Role: {
        type: String
    },
    Password: {
        type: String
    }
})
const User = mongoose.model("Users", UserSchema);
module.exports = User;