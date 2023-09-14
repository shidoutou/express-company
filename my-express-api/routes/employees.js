const express = require('express');
const router = express.Router();
const db = require('../database');

// GET 社員情報全て検索
router.get('/searchAll', (req, res) => {
    db.any('SELECT * FROM employees')
        .then(data => res.json(data))
        .catch(error => {
            console.error('ERROR:', error);
            res.sendStatus(500);
        });
});

// GET 条件で検索
router.get('/search', (req, res) => {
    const name = req.query.name;
    db.any('SELECT * FROM employees WHERE name ILIKE $1', [`%${name}%`])
        .then(data => res.json(data))
        .catch(error => {
            console.error('ERROR:', error);
            res.sendStatus(500);
        });
});

module.exports = router;
