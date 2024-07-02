import express from 'express';
import cors from  'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import messageRouter from './router/messageRouter.js'
const app = express();

dotenv.config({path : "./config/config.env"});

app.use(express.json());
app.use(express.urlencoded({ extended : true}));

app.use(cors({
    origin: 'http://localhost:5173',  
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
    credentials: true
  }));

app.get("/", (req, res) => {
   res.json({
    success : true,
    message: "HABIBI COME TO DUBAI!"
   });
});


app.use("/message", messageRouter);

    mongoose.connect(process.env.MONGO_URI, {dbName: "CONTACT_MESSAGE"})
    .then(console.log("database connected"))
    .catch(err => console.log(err));


export default app;