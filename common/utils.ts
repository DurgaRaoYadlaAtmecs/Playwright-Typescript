import * as mysql from 'mysql2';
import * as sql from 'mssql/msnodesqlv8';
import { BehaviourSubject } from "./behaviourSubject";


// var mysql = require('mysql2');

const poolrequest = new BehaviourSubject();

export class Utils {
  pool: any;
  pool2: any;
  poolMySqlBehavioursubject: any;
  poolMsSqlBehavioursubject: any;
  poolConnect: any;

  /**
   * creating pool connection for MySql server
   */
  poolConnectionMySql() {
    poolrequest.getPoolMySql.subscribe(data => {
      this.poolMySqlBehavioursubject = data;
    })
    if (!this.poolMySqlBehavioursubject) {
      console.log("------pool doesnt exist conn1-----");
      const config = {
        connectionLimit: 1,
        host: 'localhost',
        user: 'Durga',
        password: 'Atmecs@123',
        database: 'first_db_creation',
        debug: false,
        waitForConnections: true,
        multipleStatements: true
      };
      this.pool = mysql.createPool(config);
      poolrequest.updateMySqlPoolValue(this.pool)
      return this.pool;
    } else {
      console.log("------pool exist conn1-----");
      return this.poolMySqlBehavioursubject;
    }
  };


  /**
   * query request execution for playwright test cases
   */
  async searchQueryMYSQL(query) {
    const [rows, fields] = await this.poolConnectionMySql().query(query);
    console.log("chk rows------>", rows);
    console.log("chk fields------>", fields);
    //await this.pool.end();
    return rows;
  }



   /**
   * creating pool connection for MsSql server
   */

  async connectSQLDB(query) {
    poolrequest.getPoolMsSql.subscribe(data => {
      this.poolMsSqlBehavioursubject = data;
    })
    console.log("----------inside----------")
    var config = {
      connectionString: 'Driver={ODBC Driver 13 for SQL Server};Server=localhost;Database=master;Trusted_Connection=yes;',
    };

    if (!this.poolMsSqlBehavioursubject) {
      console.log("-----------------inside new connection---------")
      this.poolMsSqlBehavioursubject = await new sql.ConnectionPool(config);
      poolrequest.updateMsSqlPoolValue(this.poolMsSqlBehavioursubject);
    }else{
      console.log("------- inside existing connection")
    }
    await this.poolMsSqlBehavioursubject.connect();
    const request = new sql.Request(this.poolMsSqlBehavioursubject);
    const result = await request.query(query);

  console.log("----------chk result---------", JSON.stringify(result));
    return result
  }
}