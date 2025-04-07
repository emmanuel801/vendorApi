import { Router } from "express";
import userRoute from './routes/userRoute.js'
import vendorRoute from './routes/vendorRoute.js'
import foodRoute from '.routes/foodRoute.js'



const router = Router()


app.use(userRoute)
app.use(vendorRoute)
app.use(foodRoute)  

export default router