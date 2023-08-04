import express from "express";



//create express app

const app = express();

app.get("/", (req, res)=> {
res.send("Hello From Server");

});

export default app;


//const PORT = 8000;
