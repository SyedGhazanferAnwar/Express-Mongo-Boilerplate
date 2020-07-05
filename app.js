//.env File Required
require("dotenv").config();

const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const morganMiddleware = require("./middlewares/morganMiddleware")

const app = express();

// set security HTTP headers
app.use(helmet());
app.use(
    bodyParser.urlencoded({
        extended: true,
    }),
);
app.use(bodyParser.json());

//Initializing Mongoose with connection String
require("./MongooseInit")

const router = express.Router();

app.use(morganMiddleware);
// Set the target area
app.use('/', router);
require('./routes.js')(router);

app.use((error, req, res, next) => {
    if (res.headerSent) {
        return next(error);
    }
    res.status(error.code || 500)
        .json({ message: error.message || "Unknown Error Occured" })
});
//Starting up the server
const port = process.env.PORT || 3000
app.listen(port);
console.log('Server running on port ' + port);
console.log(
    'Open http://localhost:' +
    port +
    '/ to view the heartbeat and test browser access!',
);
