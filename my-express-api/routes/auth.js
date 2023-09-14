const express = require('express');
const router = express.Router();
const db = require('../database');

// 登录
router.post('/login', (req, res) => {

});

// 注销
router.post('/logout', (req, res) => {

});

// 修改密码
router.put('/change-password', (req, res) => {

});

// 注册或添加新用户
router.post('/register', (req, res) => {

});


// 删除用户
router.delete('users/:id', (req, res) => {

});

// 分配/撤回用户权限
router.put('/users/:id/permissions', (req, res) => {

});

module.exports = router;
