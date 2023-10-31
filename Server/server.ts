import express from 'express';

const app = express();

app.use('/', (req, res) => {
    return res.json('Hello from food order Backend');
})

app.listen(8000, () => {
    console.log('App is running on port 8000');
})