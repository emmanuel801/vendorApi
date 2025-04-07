import { Router } from "express";
import { createVendor, getSingleVendor, getVendor,putVendor } from "../controller/vendorController.js";

const router = Router()


router.get("/vendors",getVendor)
router.get("/vendors/:id",getSingleVendor)
router.put("/vendors/:id",putVendor)
router.post("/vendors",createVendor)



export default router
