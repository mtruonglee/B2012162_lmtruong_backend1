const app = require('./app.js');
const config = require('./app/config');

//start server
const port = config.app.port;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});