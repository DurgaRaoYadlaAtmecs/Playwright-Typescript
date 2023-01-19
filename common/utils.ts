import * as mysql from 'mysql2';
// var mysql = require('mysql2');

export class Utils {
    pool:any
      async connectDb() {
        //checking for DB connecion to achieve sigleton design pattern
        if (this.pool) {
            console.log('------inside existing connection-----------')
        }else{
            console.log("----------inside new connection----------")
            await this.callPoolConnection()
        }
      }

      async callPoolConnection() {
        this.pool = await mysql.createPool({
            host: 'localhost',
            user: 'Durga',
            password: 'Atmecs@123',
            database: 'first_db_creation'
          });
      }

     async searchQuery(query) {
        console.log("chk query---->", query)
         // now get a Promise wrapped instance of that pool
         const promisePool = this.pool.promise();
         // query database using promises
         const [rows,fields] = await promisePool.query(query);
         console.log("chk rows----->", rows)
         console.log("chk fields----->", fields)
         return rows;
      }

      async closePool() {
        console.log("----------Pool ended-----------")
        await this.pool.end();
      }

}