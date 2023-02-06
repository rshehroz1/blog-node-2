const express = require("express")
const app = express()
const expressEdge = require("express-edge")
const path = require("path")


app.use(express.static("public"))
app.use(expressEdge.engine)
app.set("views", `${__dirname}/views`)

app.get("/", (req, res) =>{
    res.render("index")
})

app.get("/about", (req, res) =>{
    res.render("about")
})

app.get("/contact", (req, res) =>{
    res.render("contact")
})

app.get("/post", (req, res) =>{
    res.render("post")
})

app.listen(3000, ()=>{
    console.log("server connect");
})