const express = require('express');
const router = express.Router();
const db = require('../database');

// 批量添加勤务记录
router.post('/bulk', (req, res) => {

});

// 根据日期范围筛选勤务记录
router.get('/bulk?start_date=xxxx-xx-xx&end_date=xxxx-xx-xx', (req, res) => {

});

// 获取特定月份的勤务记录
router.get('/:employee_id/month/:month', (req, res) => {

});

module.exports = router;
