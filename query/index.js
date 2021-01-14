const express = require("express");
const cors = require("cors")
const bodyParser = require("body-parser")

const app = express();

app.use(cors());
app.use(bodyParser.json())

app.get("/posts", (req, res) => {

})

app.post("/events", (req, res) => {
    
})

app.listen(4002, () => {
    console.log("Listening on 4002")
})