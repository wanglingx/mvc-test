const express = require('express')
const server = express();
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const router = require('./routes/router');
const path = require('path');
const port = process.env.PORT || 3000

server.set('view engine', 'ejs');
server.set('views', path.join(__dirname, 'view'))

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: false }))
server.use(cors());
server.use(helmet());
server.use(express.json());
server.use(router);

server.listen(port, () => {
    console.log(` [HOST] http://localhost:${port}`);
})