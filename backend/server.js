const express = require("express");
const path = require("path");

const app=express();
const port=8080;

app.use(express.json());

app.use(express.static(path.join(__dirname,"..","frontend")));

let artworks={};

app.get("api/artworks", function(request , response)
{
    response.json(artworks);
});

app.listen(port,function(){
    console.log("Artconnect server is running at : "+port);
})