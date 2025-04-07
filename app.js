import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import router from "../routes/index.js"

router.use('/api/v1', router)

dotenv.config();
export const app = express();
const port = process.env.PORT  || 4001
app.use(express.json())


                   
// app.listen(port, ()=>{
//     console.log(`server listening on ${port}`)
// })



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
