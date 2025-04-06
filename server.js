const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'src')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'login.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'register.html'));
});

app.get('/forgot-password', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'forgot-password.html'));
});

app.get('/404', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', '404.html'));
});

app.get('/blank', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'blank.html'));
});

app.get('/buttons', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'buttons.html'));
});

app.get('/cards', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'cards.html'));
});

app.get('/charts', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'charts.html'));
});

app.get('/tables', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'tables.html'));
});

app.get('/utilities-animation', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'utilities-animation.html'));
});

app.get('/utilities-border', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'utilities-border.html'));
});

app.get('/utilities-color', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'utilities-color.html'));
});

app.get('/utilities-other', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'utilities-other.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
