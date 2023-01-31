import { PoolOptions } from "mysql2";

export  const MYSQLDBCONNECTIONOBJECT:PoolOptions = {
    connectionLimit: 100, 
    host: 'localhost',
    user: 'Durga',
    password: 'Atmecs@123',
    database: 'first_db_creation',
    debug: false,
    waitForConnections: true,
    multipleStatements: true
  };