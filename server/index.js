const express = require('express');
const app = express();
const adminRoutes = require('./routes/admin');
const clientRoutes = require('./routes/client');
const authRoutes = require('./routes/auth');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static('public'));

app.use('/admin', adminRoutes);
app.use('/client', clientRoutes);
app.use('/auth', authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
