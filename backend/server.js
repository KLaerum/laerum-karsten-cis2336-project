const express = require("express");
const path = require("path");

const app=express();
const port=8080;

app.use(express.json());

app.use(express.static(path.join(__dirname,"..","frontend")));

let artworks=[];

app.get("/api/artworks", function(request , response)
{
    response.json(artworks);
});

app.listen(port,function(){
    console.log("Artconnect server is running at : "+port);
})

app.post("/api/artworks", function(request, response){
    const title= request.body.title;
    const artist= request.body.artist;
    const category= request.body.category;
    const price= request.body.price;

    if(!title || !artist || !category)
    {
        return response.status(400).json({message: "Title, artist and category are required."});

    }
    if(price !== null && price<0 )
    {
        return response.status(400).json({message: "Price can't be negative."});

    }
    const newArt={
        id:artworks.length+1,
        title:title,
        artist:artist,
        category:category,
        price:price

    };
    artworks.push(newArt);

    response.status(201).json({message: "Artwork submitted successfully!"});
});