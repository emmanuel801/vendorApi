import { Router } from "express";
import { getFood, getSingleFood, createFood, deleteFood, putFood,   } from "../controller/foodController.js";


const router = Router()

router.get("/users",getFood)
router.get("/users/:id",getSingleFood)
router.post("/users",createFood)
router.delete("/users",deleteFood)
router.put("/users/:id",putFood)


export default router;