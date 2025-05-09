import foodModel from "../models/foodModel.js";
import cloudinary from "../config/cloudinary.js"; // Default import

// Add food item
const addFood = async (req, res) => {
    try {
        // Check if file is uploaded
        if (!req.file) {
            return res.status(400).json({ success: false, message: "No image uploaded" });
        }

        // Validate image file type
        const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
        if (!allowedTypes.includes(req.file.mimetype)) {
            return res.status(400).json({ success: false, message: "Invalid image type. Allowed types: jpeg, png, gif." });
        }

        const maxSize = 5 * 1024 * 1024; // 5MB File Size
        if (req.file.size > maxSize) {
            return res.status(400).json({ success: false, message: "File size exceeds the 5MB limit." });
        }

        // Upload the image to Cloudinary
        const uploadResult = await cloudinary.uploader.upload(req.file.path, {
            folder: 'food_images',  
        });

        // Create food item with the Cloudinary image URL
        const food = new foodModel({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            category: req.body.category,
            image: uploadResult.secure_url, // Save the Cloudinary URL
        });

        await food.save();
        res.status(201).json({ success: true, message: "Food added successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Error adding food" });
    }
};

// List all food items
const listFood = async (req, res) => {
    try {
        const foods = await foodModel.find({});
        res.json({ success: true, data: foods });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Error retrieving foods" });
    }
};

// Remove food item
const removeFood = async (req, res) => {
    try {
        const food = await foodModel.findById(req.body.id);
        if (!food) {
            return res.status(404).json({ success: false, message: "Food item not found" });
        }

        const publicId = food.image.split('/').pop().split('.').shift(); 
        await cloudinary.uploader.destroy(publicId);

        // Delete the food item from the database
        await foodModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "Food removed successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Error removing food" });
    }
};

export { addFood, listFood, removeFood };
