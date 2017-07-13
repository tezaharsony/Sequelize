const express = require('express');
const router = express.Router();
const model = require('../models')


router.get("/", function(req,res){
  model.Teacher.findAll().then(teacher =>{
    console.log(teacher);
    res.render('teacher', {dataTeacher:teacher})
    // res.send('ok')
  })
})


module.exports = router;
