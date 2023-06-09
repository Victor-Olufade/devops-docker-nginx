import express from "express";
import dotenv from 'dotenv';

dotenv.config()

const app = express();

const PORT = process.env.PORT || 3000

app.get('/', (req, res)=>{
    res.send("app is running on application")
})

app.listen(PORT, ()=>{
    console.log(`app listening on ${PORT}`);
})