const express = require("express");
const app = express();

// define middleware function
const myMiddleware = (req, res, next) => {
    console.log(`this first middleware will run on every request`);
    next();
}

app.use(myMiddleware);

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
