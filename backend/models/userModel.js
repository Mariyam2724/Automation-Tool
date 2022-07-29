// const {Schema, model} = require('../connection');

// const schemaObject =  new Schema({
//     name : String,
//     mobile : String,
//     age : Number,
//     email : String,
//     password : String,
// })

// module.exports = model('users', schemaObject);

const {model, Schema} = require('../connection');

// defining structure
const mySchema = new Schema({
    name: String,
    
    age : Number,
    email : String,
    password : String,
})

module.exports=model('users',mySchema);