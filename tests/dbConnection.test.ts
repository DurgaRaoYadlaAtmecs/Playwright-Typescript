import {test, expect } from "@playwright/test";

import { Utils } from "../common/utils";

 const db = new Utils();

 test.beforeEach(async () => {
     db.connectDb();
 })

 test.afterAll(async () => {
     db.closePool();
 })
 test.describe('two tests', () => {
     test("Input Entries into the table", async () => {

      await db.searchQuery(`INSERT INTO first_db_creation VALUE("Jyothi", "Female", 28, "Delhi");`).then((result) => 
        {
            console.log("chk affected rows----->",(result))
            expect(result.affectedRows).toEqual(1)
        })
    })

test("Update an Entry into the table and verify", async () => {

    await db.searchQuery(`UPDATE first_db_creation SET age = 56 WHERE full_Name="Kiran"`).then((result) => {
        console.log("chk changedRows----->",(result))
        expect(result.changedRows).toEqual(1)
    })

    await db.searchQuery(`SELECT full_Name FROM first_db_creation WHERE age = 27`).then((result) => {
        console.log("chk changedRows fetch----->",JSON.stringify(result[0]))
        expect(result[0].full_Name).toEqual('Ramesh')
    })
})

test("Verify that there is only one row where the city is Mumbai", async () => {

  await db.searchQuery(`SELECT COUNT(*) as "rowCount" FROM first_db_creation WHERE location="Mumbai"`).then((result) => 
    {
        console.log("chk row count----->",result)
        expect(result[0].rowCount).toEqual(1)
    })
})

test("Delete a table and verify", async () => {

    await db.searchQuery(`DROP TABLE first_db_creation`).then((result) => 
      {
          console.log("chk message----->",result)
          expect(result.message).toEqual("")
      })
  })
 });


