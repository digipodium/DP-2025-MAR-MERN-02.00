// Importing express
const express = require('express');
const UserRouter = require('./routers/userRouter');

// Express App
const app = express();

const PORT = 5000;

// Middleware
app.use(express.json()); // To parse JSON data
app.use('/user', UserRouter);

// Routing
app.get('/', (req, res) => {
    res.send('Response from Express');
});

app.get('/add', (req, res) => {
    res.send('Response from Add Route');
});


app.listen(PORT, () => {
    console.log("Server is running on port - " + PORT);
})
