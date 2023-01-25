import { MSSQLDBCONNECTIONOBJECT } from "../../environment/MsSqlConfig.env";

const sql = require('mssql')
const msSqlConfig =  MSSQLDBCONNECTIONOBJECT;

export const poolPromise = new sql.ConnectionPool(msSqlConfig)
  .connect()
  .then(pool => {
    console.log('Connected to MSSQL')
    return pool
  })
  .catch(err => console.log('Database Connection Failed! Bad Config: ', err))