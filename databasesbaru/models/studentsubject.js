'use strict';
module.exports = function(sequelize, DataTypes) {
  var studentsubject = sequelize.define('studentsubject', {
    subjectid: DataTypes.INTEGER,
    studentid: DataTypes.INTEGER,
    score: DataTypes.INTEGER
  });
   studentsubject.associate =(models) => {
   studentsubject.belongsTo(models.Student);
   studentsubject.belongsTo(models.Subject);
}
  return studentsubject;
};
