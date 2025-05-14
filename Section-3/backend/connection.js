const mongoose = require('mongoose');
require('dotenv').config();

const url = process.env.DB_URL;

mongoose.connect(url)
    .then((result) => {
        console.log('Connected to MongoDB');
    }).catch((err) => {
        console.log('Error connecting to MongoDB:', err);
    });

module.exports = mongoose;
// This code connects to a MongoDB database using Mongoose. It uses the connection string stored in an environment variable (DB_URL) and logs a message to the console indicating whether the connection was successful or if there was an error. The mongoose instance is then exported for use in other parts of the application.