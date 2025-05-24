import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

// Generate JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: "30d",
    });
};

// @desc    Register a new user
// @route   POST /api/auth/register
// @access  Public
export const registerUser = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        // check if user exists
        const usrExists = await User.findOne({ email });
        if (usrExists) {
            return res.status(400).json({ message: "User already exists" });
        }
        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        //Create user
        const user = await User.create({
            username,
            email,
            password: hashedPassword
        });
        // Respond with token and user data
        res.status(201).json({
            _id: user._id,
            username: user.username,
            email: user.email,
            token: generateToken(user._id),
        });

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
// @desc    Login user
// @route   POST /api/auth/login
// @access  Public
export const loginUser = async (req, res) => {
    const {  email, password } = req.body;

    try {
        //Find user
        const user = await User.findOne({ email });
        if (!user) { return res.status(400).json({ message: "Invalid email" }) };

        // Compare Password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Invalid password" });

        // Respond with token and user data
        res.status(200).json({
            _id: user._id,
            email: user.email,
            token: generateToken(user._id),
        });


    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
// @desc    Get current user profile
// @route   GET /api/auth/me
// @access  Private
export const getMe = async (req, res) => {
    const user = req.user;

    res.status(200).json({
        _id: user._id,
        username: user.username,
        email: user.email,
    });
};
