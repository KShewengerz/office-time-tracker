require('dotenv').config();

const knex       = require("knex");
const knexConfig = require("../../knexfile");

const env        = process.env.NODE_ENV;
const config     = knexConfig[env];

const db         = knex(config);


export { db };