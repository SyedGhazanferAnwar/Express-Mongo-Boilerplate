module.exports = function (app) {
    const heartbeat = require("./controllers/heartbeat");
    app.get("/", heartbeat.index);

    const Homepage = require("./controllers/Homepage");
    app.get("/homepage", Homepage.index);

    const Auth = require("./controllers/Auth");
    app.post("/login",Auth.login)

}