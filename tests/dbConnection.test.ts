import {test, expect } from "@playwright/test";

import { MsSQLConnectionUtility } from "./DBUtils/MsSQLDBUtils/MsSQLConnectionUtility";

import { MySQLConnectionUtility } from "./DBUtils/MySQLDBUtils/MySQLConnectionUtility"


let myqlDB: DBOperations = new MySQLConnectionUtility();
 let msqlDB: DBOperations = new MsSQLConnectionUtility();

//  test.beforeEach(async () => {
//      db.getPool();
//       //db.connectSQLDB();
// })

 test.afterAll(async () => {
    msqlDB.endConnection();
})
 test.describe('two tests', () => {

    //  test("Input Entries into the table", async () => {

    //   await mysqlDB.execute(`INSERT INTO first_db_creation VALUE("Sulaiman12", "Male", 25, "Pune");`).then((result) => 
    //     {
    //         console.log("chk affected rows----->",(result))
    //         expect(result.affectedRows).toEqual(1)
    //     })
    // })

    //  test("Update an Entry into the table and verify", async () => {

    // await mysqlDB.execute(`UPDATE first_db_creation SET age = 36 WHERE full_Name="Kiran"`).then((result) => {
    //     console.log("chk changedRows----->",(result))
    //     expect(result.changedRows).toEqual(1)
    // })

    // await mysqlDB.execute(`SELECT full_Name FROM first_db_creation WHERE age = 27`).then((result) => {
    //     console.log("chk changedRows fetch----->",JSON.stringify(result[0]))
    //     expect(result[0].full_Name).toEqual('Ramesh')
    // })
    // })

//      test("Verify that there is only one row where the city is Mumbai", async () => {

//   await db.searchQueryMYSQL(`SELECT COUNT(*) as "rowCount" FROM first_db_creation WHERE location="Mumbai"`).then((result) => 
//     {
//         console.log("chk row count----->",result)
//         expect(result[0].rowCount).toEqual(1)
//     })
//     })

//      test("Delete a table and verify", async () => {

//     await db.searchQueryMYSQL(`DROP TABLE first_db_creation`).then((result) => 
//       {
//           console.log("chk message----->",result)
//           expect(result.message).toEqual("")
//       })
//     })

       
      test("Input Entries into the table", async () => {

        await msqlDB.execute(`INSERT INTO testDB.dbo.persons VALUES (8797, 'L6', 'Rakesh6', 'KPHB', 'HYD');`).then((result) => 
          {
              console.log("chk affected rows conn1----->",(result.rowsAffected))
              expect(result.rowsAffected[0]).toEqual(1)
          })
      })

      test("Update an Entry into the table and verify", async () => {

        await msqlDB.execute(`UPDATE testDB.dbo.persons SET Lastname = 'z' WHERE PersonID = 1234;`).then((result) => {
            console.log("chk changedRows----->",(result))
            expect(result.rowsAffected[0]).toEqual(1)
        }) 
    }) 
});


