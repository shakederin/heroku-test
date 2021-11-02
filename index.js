const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, "./src")));

app.get("/", (req,res)=>{
    res.sendFile("./src/index.html", {root: __dirname});
})

app.listen(port, ()=>{
    console.log("running...");
})
