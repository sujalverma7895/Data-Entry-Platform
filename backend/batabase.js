const mongoose = require('mongoose');
const connectbd= async()=>{
   await  mongoose.connect("mongodb+srv://sujalsoni7895:sujal7895@divine.sc0yg.mongodb.net/test")
}

module.exports=connectbd;