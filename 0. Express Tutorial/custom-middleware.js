const express = require("express");
const app = express();

const requestTimestampLogger = (req, res, next) => {
    const timeStamp = new Date().toISOString();

    console.log(`${timeStamp} from ${req.method} to ${req.url}`);
    next();
}
app.use(requestTimestampLogger);

app.get('/', (req, res) => {
    res.send(`Home page`);
});

app.get('/about', (req, res) => {
    res.send(`About page`);
});

const port = 3000;
app.listen(3000, () => {
    console.log(`Server is now running on port ${port}`);
});
