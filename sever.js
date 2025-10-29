const express = require("express");
const bodyParser = require("body-parser");
const OAuth2Server = require("oauth2-server");

const app = express();
app.use.use(bodyParser.json());

const oauth2 = new OAuth2Server({
    model: require("./model"),
    grants: ["password", "refresh_token"],
    debug: true,
});

app.post('/auth', (req, res) => {
    const request = new OAuth2Server.Request(req);
    const response = new OAuth2Server.Response(res);
    oauth2.token(request, response)
        .then((token) => {
            res.json(token);
        })
        .catch((err) => {
            res.json(err);
        });
})

app.listen(3000, () => {
    console.log("oauth server started on port 3000");
})