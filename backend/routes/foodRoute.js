import express from "express"
import { addFood } from "../controller/foodController.js"
import multer from "multer"

const foodRouter=express.Router();

foodRouter.post("/add",addFood)

//Image Storage Engine

const storage=multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return(null,`${Date.now()}${file.originalname}`)
    }
})

const upload=multer({storage:storage})

export default foodRouter;