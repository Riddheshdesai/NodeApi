const express = require("express");
const router = express.Router();
const User = require("../models/userSchema");

router.post("/register", async (req, res) => {
  try {
    const { mobile_number, name, society, password, cpassword } = req.body;

    if (!mobile_number || !name || !society || !password || !cpassword) {
      return res.status(401).json({ message: "All fields are mandatory" });
    }

    if (password !== cpassword) {
      return res
        .status(401)
        .json({ message: "Password and Confirm Password not matching" });
    }

    await User.create({
      mobile_number,
      name,
      password,
    });

    res.status(201).json({ message: "Registration Success" });
  } catch (error) {
    console.log(error);
  }
});
router.get("/getdetails", async (req, res) => {
  try {
    const userData =await User.find()
    res.status(201).json(userData);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
