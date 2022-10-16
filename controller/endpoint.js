const { Logic } = require('./logic');
const models = require('../models/model');
class Endpoint {

    constructor() {
        this.dataStudent = models.dataStudent;
    }

    createStudent = (req, res) => {
        this.dataStudent.student_id = req.body.student_id;
        this.dataStudent.name = req.body.name;
        this.dataStudent.point = req.body.point;
        new Logic().createStudentLogic(this.dataStudent, res);
    }

    getData = (req, res) => {
        new Logic().getDataLogic(res)
    }

    scoreSum = (req, res) => {
        new Logic().scoreSumLogic(this.dataStudent,res)
    }
}
module.exports = {
    Endpoint
}