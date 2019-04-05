import * as Knex from "knex";
import { genSaltSync, hashSync } from 'bcrypt';

import { AdminTable } from '@app/enums';
import { Admin } from '@app/interfaces';

require('dotenv').config();


export async function up(knex: Knex) {
  return await knex.schema.createTable(AdminTable.Table, table => {
    table.increments(AdminTable.Id).primary();
    table.string(AdminTable.Username).unique().notNullable();
    table.string(AdminTable.Password).notNullable();
  })
 .then( async () => {
    const username = process.env.ADMIN_USERNAME;
    const password = hashSync(process.env.ADMIN_PASSWORD, genSaltSync(10));
   
    return await knex(AdminTable.Table).insert(<Admin>{ username, password });
 });
}


export async function down(knex: Knex) {
  return await knex.schema.dropTable(AdminTable.Table);
}

