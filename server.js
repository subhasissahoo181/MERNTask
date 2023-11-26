require('dotenv').config();
const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const cookieparser = require('cookie-parser');
const authRouter = require('./routers/authRouter');

const app = express();

app.use(express.json())  //for body parsing..
app.use(cors());
app.use(cookieparser());

// routes
app.use('/api',authRouter)


// const port = process.env.PORT || 5050;
const URL = process.env.MONGO_URI;
const port = process.env.PORT || 5000;
// const URL = process.env.MONGO_URI || 'mongodb+srv://admin:admin@1234@cluster1.6nngtbt.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(URL, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
},(err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        throw err;
    }
    console.log('Database connected successfully');
});




app.listen(port,()=>{
    console.log(`app is running on ${port}`)
});