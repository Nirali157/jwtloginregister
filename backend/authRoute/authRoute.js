const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../userModel/userModel')

const router = express.Router()

router.post("/signup", async (req, res) => {
    const { name, email, password } = req.body
    const hashedPassword = await bcrypt.hash(password, 10)
    const user = await User.create(
        {
            name,
            email,
            password: hashedPassword
        })
    return res.send(user)
})


router.post('/login', async (req, res) => {
    const { email, password } = req.body

    const user = await User.findOne({ email })
    if (!user)
        return res.status(400).json({ message: "user not found" })

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch)
        return res.status(400).json({ message: "invalid password" })

    const token = jwt.sign({ id: user._id }, "SECRETKEY")
    res.json({ token, user })
})


module.exports = router