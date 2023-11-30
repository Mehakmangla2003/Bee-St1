const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/product');

const app = express();
const PORT = process.env.PORT || 3000;



// Middleware
app.use(express.json());

// Routes
app.use('/products', productRoutes);

mongoose.connect("mongodb+srv://mehak0877be21:Mehak062001@cluster0.jajmxwz.mongodb.net/?retryWrites=true&w=majority"
).then(() => console.log("Connected to database"))
.then(() => {
    app.listen(4000);
}).catch((err) => console.log(err));