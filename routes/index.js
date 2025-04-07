import { Router } from "express";
import userRoute from './userRoute.js'
import vendorRoute from './vendorRoute.js'
import foodRoute from './foodRoute.js'


const router = Router()

router.use(userRoute)
router.use(vendorRoute)
router.use(foodRoute)

export default router