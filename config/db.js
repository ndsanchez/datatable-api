const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://neds:95122311@database-neds-hdlfl.mongodb.net/datatable?retryWrites=true&w=majority");

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log("we're connected!");
})    
var employeeSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    Ident: { type: String, unique: true },
    Name: String,
    Position: String,
    Office: String,
    StartDate: String,
    Salary: String,
    State: String
},{
    versionKey:false
});

module.exports = mongoose.model('employees',employeeSchema); 