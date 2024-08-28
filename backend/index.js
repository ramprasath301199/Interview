const express = require("express");
const connect = require("./connection/connect");
const dotenv = require("dotenv").config();
const app = express();
const user = require("./routes/user")
const cors = require("cors")
const port = process.env.PORT || 3011;
app.use(express.json());
app.use(cors({ origin: "http://localhost:4200" }))
connect().then(() => {
    console.log("db connected")
    app.use("/api/", user);
    app.use((req, res) => {
        res.status(404).send('404 - Not Found');
    });
    app.listen(port, () => {
        console.log("server running http://localhost:" + port + "")
    })
}).catch(err => {
    console.log(err);
});