// set express
const express = require("express");
const app = express();

app.use(express.static("public"));

// set ejs
const expresslayout = require('express-ejs-layouts')
app.use(expresslayout)
app.set("view engine", "ejs");

// parsing data supaya bisa digunaka oleh req body
app.set(express.urlencoded({ extended : true }))

// render
app.get("/", (req, res) => {
    res.render("index", {
        layout : "./layouts/main-layout",
        title: "page home",
    });
});

app.get("/about",(req,res)=>{
    res.render("about",{
        layout : "./layouts/main-layout",
        title : "About page"
    })
})

const port = 3002;
app.listen(port, () => {
    console.log(`Port running at http://localhost:${port}`);
});
