import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import helmet from "helmet";
import mongoSanitize from "express-mongo-sanitize";
import cookieParser from "cookie-parser";  
import compression from "compression"; 
import fileUpload from "express-fileupload";
import cors from "cors";


//dot Env config
dotenv.config();


//create express app
const app = express();

//morgan
if (process.env.NODE_ENV !== "production"){
    app.use(morgan("dev"));
}

//helmet
app.use(helmet());

//parse request json body
app.use(express.json());
app.use(express.urlencoded({extended : true}));

//sanitize request data
app.use(mongoSanitize());

//enable cookie parser
app.use(cookieParser());

//gzip compression
app.use(compression);

//file upload
app.use(fileUpload({
    useTempFiles:true,
}));

//
app.use(cors());



app.post("/test", (req, res)=> {
res.send(req.body);

});



export default app;
//const PORT = 8000;
