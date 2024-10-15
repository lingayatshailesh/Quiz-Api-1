const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const quizData = new Schema({
    question : {
        type : String,
        required : true,
        unique : true
    },
    option1 : {
        type : String,
        required : true
    },
    option2 : {
        type : String,
        required : true
    },
    option3 : {
        type : String,
        required : true
    },
    option4 : {
        type : String,
        required : true
    },
    isCorrect : {
        type : String,
        required : true
    },
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "users",
        required : true
    }
},
{timestamps : true}
);

let QUIZ = mongoose.model("quiz",quizData)
module.exports = QUIZ