const express = require("express")
const app = express()
const expressEdge = require("express-edge")
const mongoose = require("mongoose")
const path = require("path")

mongoose.connect("mongodb+srv://Shehroz:dadam123@cluster0.mxtjdya.mongodb.net/merigram")

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

app.get("/posts/new", (req, res) =>{
    res.render("create")
})

app.listen(3000, ()=>{
    console.log("server connect");
})