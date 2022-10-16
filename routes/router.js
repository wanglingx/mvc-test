const express = require('express');
const { Endpoint } = require('../controller/endpoint');
const router = express.Router()

// router.get('/hi', (req, res) => {
//     res.send('Hello, World!')
// })
router.post('/createStudent', new Endpoint().createStudent);
router.get('/getData', new Endpoint().getData);
router.get('/score', new Endpoint().scoreSum);

router.get('/',(req, res) => {
    return res.render('../views/index.ejs');
})

module.exports = router;