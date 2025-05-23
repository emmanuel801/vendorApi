import { Router } from "express";
import { getSingleUser,getUser, putUser ,createUser, deleteUser, registerUser} from "../controller/userController.js";

const router = Router()


router.get("/users",getUser)
router.get("/user/:id",getSingleUser)
router.put("/users/:id",putUser)
router.post("/users", createUser)
router.delete("/user",deleteUser)
router.get("/users",registerUser)

export default router;