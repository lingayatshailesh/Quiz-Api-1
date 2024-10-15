var express = require('express');
var router = express.Router();
let UC = require("../controller/user")
let QC = require("../controller/quiz")

/* GET users listing. */
router.post('/create',UC.sequre, QC.quizCreate);

router.get('/alldata', UC.sequre, QC.quizFindAllData);

router.get('/:id', UC.sequre, QC.quizFindId);

router.patch('/:id', UC.sequre, QC.quizIdUpdate);

router.delete('/:id', UC.sequre, QC.quizIdDelete);

module.exports = router;
