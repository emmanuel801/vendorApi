import { Router } from "express";
import userRoute from './userRoute.js'
import vendorRoute from './vendorRoute.js'
import foodRoute from './foodRoute.js'



const router = Router()


app.use(userRoute)
app.use(vendorRoute)
app.use(foodRoute)  

export default router