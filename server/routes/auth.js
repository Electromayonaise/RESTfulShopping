const express = require('express');
const router = express.Router();

const users = [
    { username: 'admin', password: 'adminpassword', role: 'admin' },
    { username: 'client', password: 'clientpassword', role: 'client' }
];

router.post('/login', (req, res) => {
    const { username, password } = req.body;
    console.log('Solicitud de login recibida:', username, password);
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        console.log('Usuario autenticado:', user);
        res.json({ success: true, role: user.role });
    } else {
        console.log('Autenticación fallida');
        res.json({ success: false });
    }
});

module.exports = router;
