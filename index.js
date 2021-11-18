const express = require('express');
const port = process.env.PORT || 8000;
const app = express();

app.get('/', (req, res) => {
    res.send('Web Dev Com Boas Práticas - Exercício 5 - Docker with Deploy to Heroku Automatically from GitHub v1.2');
});

app.listen(port, () => { console.log('Our App Is Up And Running!'); });
module.exports = app