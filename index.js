import mongoose from "mongoose";
import express from "express";
import bodyparser from "body-parser";

import { checkCollection } from "./middlewares/decisionhelper.js";

let conn = await mongoose.connect("mongodb+srv://kunnalpareek18:y4qCO534tGyRecoB@testproject.nse08tz.mongodb.net/");

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyparser.urlencoded({extended:true}));


app.post("/", async (req,res)=>{
//function will check whether data base is empty or not and will populate it if yes otherwise make it empty
    checkCollection();
});

app.listen(port,(req,res)=>{
    console.log("App listening on port: ", port); });