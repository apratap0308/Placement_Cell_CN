const mongoose = require('mongoose');

// mongoose.connect(`mongodb+srv://${process.env.username}:${process.env.password}@cluster0.zygzz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`);
mongoose.set('strictQuery', false);

mongoose.connect( process.env.DB);

const db = mongoose.connection;

db.on('error',console.error.bind(console,"Error connecting to MongoDB"));

db.once('open',function(){
    console.log("Connected to Database :: MongoDB")
});

module.exports = db;