const mongoose = require('mongoose');

//A scheme is used to structure data, here we make a structure based around the form that is going
//to be used in our front end files, so that we can save that data to our database.
const GroupSchema = new mongoose.Schema({

    groupName: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'groups'
    
},
    email: {
        type: String
    },
    password: {
        type: String
    },
        contactGroups: [{
        groupName: {
            type: String
        },
        contacts:{
            type:String
        },
        members: [{
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "contacts"
            }
        }], 
        groupName:{
            type: String
        },
        date: {
            type: Date,
            default: Date.now
        }
        }],
        groupName:{
            type: String
        },
    date: {
        type: Date,
        default: Date.now
    }
});
//We use module.exports to 'expose' this module, so that we can call it in different files of pur project
module.exports = User = mongoose.model('groups', GroupSchema);
