require('dotenv').config();

const knex       = require("knex");
const knexConfig = require("../knexfile");

const env        = process.env.NODE_ENV;
const config     = knexConfig[env];

const connection = knex(config);


export { connection };