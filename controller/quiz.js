let QUIZ = require("../model/quiz")

exports.quizCreate = async function(req, res, next) {
    try {
      let quizCreate = await QUIZ.create(req.body)
      res.status(201).json({
        status : "Success",
        message : "Quiz Create Successfull",
        data : quizCreate
      })
    } catch (error) {
        res.status(404).json({
            status : "Fail",
            message : error.message
          })
    }
  }

  exports.quizFindAllData = async function(req, res, next) {
    try {
      let quizFindAllData = await QUIZ.find().populate("userId")
      res.status(200).json({
        status : "Success",
        message : "Quiz Find All Data Successfull",
        data : quizFindAllData
      })
    } catch (error) {
        res.status(404).json({
            status : "Fail",
            message : error.message
          })
    }
  }

  exports.quizFindId = async function(req, res, next) {
    try {
      let quizFindId = await QUIZ.findById(req.params.id).populate("userId")
      res.status(200).json({
        status : "Success",
        message : "Quiz ID Find Successfull",
        data : quizFindId
      })
    } catch (error) {
        res.status(404).json({
            status : "Fail",
            message : error.message
          })
    }
  }

  exports.quizIdUpdate = async function(req, res, next) {
    try {
      let quizIdUpdate = await QUIZ.findByIdAndUpdate(req.params.id,req.body,{new : true})
      res.status(200).json({
        status : "Success",
        message : "Quiz ID Update Successfull",
        data : quizIdUpdate
      })
    } catch (error) {
        res.status(404).json({
            status : "Fail",
            message : error.message
          })
    }
  }

  exports.quizIdDelete = async function(req, res, next) {
    try {
      await QUIZ.findByIdAndDelete(req.params.id)
      res.status(200).json({
        status : "Success",
        message : "Quiz ID Delete Successfull"
      })
    } catch (error) {
        res.status(404).json({
            status : "Fail",
            message : error.message
          })
    }
  }