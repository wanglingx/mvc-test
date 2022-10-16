const { Operator } = require('./operator');
const axios = require('axios')
class Logic {

    createStudentLogic = (student, res) => {
        //validate empthy

        //add to database
        new Operator().createStudentOperator(student, res);
    }

    getDataLogic = (res) => {
        new Operator().getDataOpertor(res);
    }

    scoreSumLogic = async (dataStudent, res) => {
        let sum = 0;
        //get database
        let response = await axios.get('http://localhost:3000/getData');
        let datalength = parseInt(response.data.response.length);
        for (let i = 0; i < datalength ; i++){
            dataStudent.student_id = response.data.response[i].student_id
            dataStudent.name = response.data.response[i].name
            dataStudent.point = response.data.response[i].point
            sum = sum + dataStudent.point;
        }
        //mean
        let mean = sum / 4;
        console.log(mean);
        return res.status(200).send("success");
    }
}

module.exports = {
    Logic
}