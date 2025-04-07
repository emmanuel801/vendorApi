import { Router } from "express";
import { getFood, getSingleFood, putFood, createFood, deleteFood, } from "../controller/foodController";


const router = Router()

router.get("/users",getFood)
router.get("/users/:id",getSingleFood)
router.put("/users/:id",putFood)
router.post("/users",createFood)
router.delete("/users",deleteFood)

  