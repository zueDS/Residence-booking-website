import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';

//configuration of dotenv
dotenv.config()

const app = express();

//PORT specification 
const PORT = process.env.PORT || 3000;

//middlewares
app.use(express.json())
app.use(cookieParser())
app.use(cors())

//connect database


app.listen(PORT, ()=> {
    console.log(`Server running on PORT ${PORT}`);
})