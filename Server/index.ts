const express = require('express');
const App = require('./services/ExpressApp') ;
const dbConnection = require('./services/Database');
const {PORT} = require('./config');

const StartServer = async() => {
    const app = express();
    await dbConnection();
    await App(app);

    app.listen(PORT, () => {
        console.log(`Listening to the port 8000 ${PORT}`);
    });
}

StartServer();