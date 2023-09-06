const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');
const logger = require('./utils/logger')

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
         logger.info(`Server UP on PORT: ${PORT}`)
      })
      logger.info('DB Connected')
   })
   .catch((err) => {
      logger.error(err.message)
   })


