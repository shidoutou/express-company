const promise = require('bluebird');
const pgp = require('pg-promise')({
    promiseLib: promise
});

const config = {
    host: 'localhost',
    port: 5432,
    database: 'postgres',
    user: 'postgres',
    password: '1234'
};

const db = pgp(config);

module.exports = db;
