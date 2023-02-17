const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")
const User = require('./Models/user');

// Connecting database.
mongoose
    .connect("mongodb://localhost:27017/mvm_fitness", {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })
    .then(() => console.log("MongoDB Connected"))
    .catch(() => console.log("Error occur while connecting MongoDB"));

app.use(express.json());
app.use(cors());

// Routes
app.get("/", (req, res) => {
    res.send("Wellcome to the backend of MVM_FITNESS!!!")
})

// User registration.
app.post("/api/user/register", async (req, res) => {
    const { fullname, phone, email, password } = req.body;

    // checks if ther user is already in database.
    const emailExists = await User.findOne({ email });
    if (emailExists) return res.status(400).send("Email already exists");

    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // create user
    const newUser = new User({
        fullname,
        phone,
        email,
        password: hashedPassword
    });

    try {
        const savedUser = await newUser.save();

        // create token
        const token = jwt.sign({ _id: savedUser._id }, "MVM_FITNESS");

        // send token to header
        res.header("auth-token", token).send(token);
    } catch (err) {
        res.status(400).send("err")
    }
});

// User login
app.post("/api/user/login", async (req, res) => {
    const { email, password } = req.body;
    const queryEmail = "^" + email + "$";

    // Check if email exists or not
    const emailExists = await User.findOne({
        email: { $regex: queryEmail, $options: "i" },
    });
    if (!emailExists) {
        return res.status(400).send("Email not found");
    } else {
        const validPassword = await bcrypt.compare(password, emailExists.password);
        if (!validPassword) return res.status(400).send("Invalid password");
        const token = jwt.sign({ _id: emailExists._id }, "MVM_FITNESS");
        res.header("auth-token", token).send(token)
    }
})

// Port
const port = 8000
app.listen(port, () => console.log(`Server running on ${port}`))