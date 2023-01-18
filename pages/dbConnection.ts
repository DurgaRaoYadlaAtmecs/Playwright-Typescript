import * as mysql from 'mysql2';

exports.DB = class DB {
   async connectDb(query) {
    console.log("chk query---->", query)
    const pool = mysql.createPool({
      host: 'localhost',
      user: 'Durga',
      password: 'Atmecs@123',
      database: 'first_db_creation'
    });
    // now get a Promise wrapped instance of that pool
    const promisePool = pool.promise();
    // query database using promises
    const [rows,fields] = await promisePool.query(query);
    console.log("chk rows----->", rows)
    console.log("chk fields----->", fields)
    return rows;
  }
     
}