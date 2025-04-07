import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import router from "./routes/index.js"

dotenv.config();
const app = express();


app.use(express.json())
app.use('/api/v1', router)


                   
// app.listen(port, ()=>{
//     console.log(`server listening on ${port}`)
// })

const port = process.env.PORT  || 4001

mongoose.connect(process.env.MONGO_URI)
   .then(()=>{
        console.log("connected successfully")
        app.listen(port, ()=>{
            console.log(`server listening on ${port}`)
    })

   })
   .catch((err)=>{
        console.log(`couldn't connect to database ${err.message}`)
   })
