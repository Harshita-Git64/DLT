import express from "express"
import {getAllUsers,adminLogin,getinstructorById} from "../controllers/authcontroller.js"

const router=express.Router()

router.get("/getusers",getAllUsers)
router.post("/adminlogin",adminLogin)
router.get("/getinstructorinfo/:id",getinstructorById)

export default router;
