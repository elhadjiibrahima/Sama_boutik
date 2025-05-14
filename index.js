const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');

dotenv.config();
const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB locale connectée'))
  .catch(err => console.error(err));

app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

app.listen(5000, () => console.log('🚀 Serveur lancé sur http://localhost:5000'));
