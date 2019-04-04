import * as Knex from "knex";

import { EmployeeTable } from '@app/enums';


export async function up(knex: Knex) {
  return await knex.schema.createTable(EmployeeTable.Table, table => {
    table.bigIncrements(EmployeeTable.Id).primary();
    table.string(EmployeeTable.Name).notNullable();
    table.dateTime(EmployeeTable.ClockIn);
    table.dateTime(EmployeeTable.ClockOut);
    table.boolean(EmployeeTable.Active);
  });
}


export async function down(knex: Knex) {
  return await knex.schema.dropTable(EmployeeTable.Table);
}

