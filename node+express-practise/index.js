const fs = require('fs');
const express = require('express')
const app = express();
const port = 3000
const { newf } = require('./temp.js');

//middlewares
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello World!');
    fs.appendFile('./mkdir1/file1.txt', `\n new User Connected ${req.ip}`, (res) => { console.log('file is created') });
    newf();
});

app.post('/new', (req, res) => res.sendFile('index.html'));
app.get('/explore', (req, res) => res.send('Hello World!'));
app.get('/', (req, res) => res.send('Hello World!'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

