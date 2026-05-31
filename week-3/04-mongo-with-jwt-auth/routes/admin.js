const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {Admin} = require("../db/index")
const jwt= require("jsonwebtoken");
const {JWT_SECRET}= require("../config");
// Admin Routes
router.post('/signup', async(req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    const admin = await Admin.findOne({
        username,
        password
    })
    if(!admin){
        await Admin.create({
            username,
            password
        })
        res.status(200).json({message: 'Admin created successfully'})
    }else{
        res.status(403).json({message: "User Already exist"})
    }
    
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    const user = await User.find({
        username,
        password
    })
    if(user){
        const token = jwt.sign({username}, JWT_SECRET);

    res.status(200).json({
        token: token
    }) 
    }else{
        res.status(403).json({
            message : "incorrect Credentials"
        })
    }
    
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
});

module.exports = router;