const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/" , function(req,res){
    res.sendFile(__dirname+"/page1.html");
});

app.post("/mypage2", function(req,res){
    res.sendFile(__dirname+"/page2.html");
});

app.get("/page3" , function(req,res){
    res.sendFile(__dirname+"/page3.html");
});

app.post("/mypage1" , function(req,res){
    res.sendFile(__dirname+"/page1.html");
});

app.listen(3000, function(){
    console.log("Server Started at 3000");
});