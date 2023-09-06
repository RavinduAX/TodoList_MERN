const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');

const PORT = process.env.PORT;
const DB_URI = process.env.MONGO_URI;

//express app
const app = express();

//middleware
app.use(express.json());
app.use(cors());

//connect with db
mongoose.connect(DB_URI)
   .then(() => {
      //listen for requests
      app.listen(PORT, () => {
         console.log(`Server UP on PORT: ${PORT}`)
      })
      console.log('DB Connected')
   })
   .catch((err) => {
      console.log(err.message)
   })


