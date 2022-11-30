const express = require("express");
const ejs = require("ejs");
const app = express();
const port = 80;
const path = require("path");
app.use("/css", express.static(path.join(__dirname, "node_modules/bootstrap/dist/css")));
app.use("/js", express.static(path.join(__dirname, "node_modules/bootstrap/dist/js")));
app.use("/jq", express.static(path.join(__dirname, "node_modules/jquery/dist")));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/",(req,res)=>{
    res.render("index");
});


app.get("/about",(req,res) =>{
    res.render("about");
})

app.get("*",(req,res)=>{
    res.send("not found");
});

app.listen(port,() =>{
    console.log("server is running on "+ port +"");
});

