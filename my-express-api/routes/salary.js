const express = require('express');
const router = express.Router();
const db = require('../database');

// 批量计算工资
router.get('/bulk?start_date=xxxx-xx-xx&end_date=xxxx-xx-xx', (req, res) => {

});

// 获取所有员工的工资统计
router.get('/summary', (req, res) => {

});

module.exports = router;
