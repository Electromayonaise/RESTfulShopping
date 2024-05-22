const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('/register', (req, res) => {
    const { username, password, role } = req.body;
    if (User.findUser(username)) {
        return res.status(400).send('User already exists');
    }
    const newUser = new User(username, password, role);
    User.addUser(newUser);
    res.status(201).send('User registered');
});

router.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = User.authenticate(username, password);
    if (!user) {
        return res.status(401).send('Invalid credentials');
    }
    res.status(200).json({ username: user.username, role: user.role });
});

module.exports = router;
