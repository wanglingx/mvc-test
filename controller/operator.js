const connection = require('../database/connector')
class Operator {

    createStudentOperator = (student, res) => {
        let sql = `INSERT INTO Student
        (
            student_id, 
            name,
            point
        )
        VALUES
        (
            ?, ?, ?
        )`

        connection.query(
            sql, [
            student.student_id,
            student.name,
            student.point,
        ],
            
            function (err) {
                if (err) {
                    console.log(err);
                } else {
                    console.log("create student finish");
                    return res.status(201).send({ response: "create student finish" })
                }
            }
        )
    }

    getDataOpertor = (res) => {
        let sql = `SELECT * FROM Student`
        connection.query(
            sql,
            function (err,data) {
                if (err) {
                    console.log(err);
                }
                else {
                    res.status(200).send({ response: data})
                }
            }
        )
    }

}
module.exports = {
    Operator
}