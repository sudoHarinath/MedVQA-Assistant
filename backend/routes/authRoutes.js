const express = require('express');
const router = express.Router();
const authController = require('../controllers/signupController');

// Routes
router.post('/signup', authController.signUp);
router.get('/login', authController.login);
router.post("/logout", async (req, res) => {
    try {
        res.clearCookie('jwt');
        res.send("ok");
    } catch (err) {
        res.status(401).json({ error: "Internal Server Error" });
    }
});
// Start the server
module.exports = router;
