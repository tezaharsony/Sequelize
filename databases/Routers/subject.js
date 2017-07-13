const express = require('express');
const router = express.Router();
const model = require('../models')


router.get("/", function(req,res){
  model.Subject.findAll().then(subject =>{
    res.render('subject', {dataSubject:subject})
    // res.send('ok')
  })
})

module.exports = router;
