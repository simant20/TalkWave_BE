import app from './app.js';
import dotenv from "dotenv";

//dot Env config
dotenv.config();

// env variables
const PORT = process.env.PORT || 8000;

//console.log(process.env.NODE_ENV);

app.listen(PORT,()=> {
    console.log("Server Is Listening At",PORT);


});
