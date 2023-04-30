const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors= require('cors');
app.use(cors());

app.get("/",(req,res)=>{
    res.send("Travelers Zone is running");
})

const destinations = require("./data/destination.json");
app.get("/destinations" , (req,res)=>{
    res.send(destinations);
})

app.get("/destinations/:id", (req,res)=>{
    const id = req.params.id;
    const selectedDestination = destinations.find(des=> des.id == id);
    res.send(selectedDestination);
})

app.listen(port, ()=>{
    console.log(`traveler zone is running on: ${port}`);
})