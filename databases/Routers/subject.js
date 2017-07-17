const express = require('express');
const router = express.Router();
const model = require('../models')

router.get('/', function(req, res){
  model.Subject.findAll()
  .then (arrSubject => {
    let promiseSubject = arrSubject.map( subject => {
      return new Promise( function (resolve, reject) {
        subject.getTeachers()
        .then( teacher => {
          subject.first_name =[];
          teacher.forEach(teacher => {
            subject.first_name.push(teacher.dataValues.first_name+' '+teacher.dataValues.last_name)
          })
          return resolve(subject);
        })
        .catch(err => reject (err));
      });
    });
    Promise.all(promiseSubject)
    .then( subject => {
      console.log(subject);
      res.render('subject', {dataSubject: subject});
    })
    .catch(err => {
      console.log(err);
    })
  })
});
module.exports = router;
