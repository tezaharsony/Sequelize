const express = require('express');
const router = express.Router();
const model = require('../models')


router.get("/", function(req,res){
  model.Student.findAll().then(student =>{
    res.render('student', {dataStudent:student})
    // res.send('ok')
  })
})

module.exports = router;
