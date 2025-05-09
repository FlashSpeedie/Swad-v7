import express from "express";
import { addFood, listFood, removeFood } from "../controllers/foodController.js";
import multer from "multer";

const foodRouter = express.Router();

const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`); 
    }
});

const upload = multer({ storage: storage });

foodRouter.post("/add", upload.single("image"), addFood);  // Add food (with image upload)
foodRouter.get("/list", listFood);  // List food items
foodRouter.post("/remove", removeFood);  // Remove food item

export default foodRouter;
