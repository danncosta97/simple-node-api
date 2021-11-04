const express = require('express');
const port = process.env.PORT || 8000;
const app = express();

app.get('/', (req, res) => {
    res.send('Web Dev Com Boas Práticas - Exercício 4 - Deploy to Heroku Automatically');
});

app.listen(port, () => { console.log('Our App Is Up And Running!'); });
module.exports = app