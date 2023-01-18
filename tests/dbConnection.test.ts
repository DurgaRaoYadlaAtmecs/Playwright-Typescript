import {test, expect } from "@playwright/test";

const { DB } = require("../pages/dbConnection");

 const db = new DB();

 test("Input Entries into the table", async () => {

      await db.connectDb(`INSERT INTO first_db_creation VALUE("Radhaaaaaaaa", "Female", 26, "Hyderabad");`).then((result) => 
        {
            console.log("chk affected rows----->"+JSON.stringify(result))
            expect(result.affectedRows).toEqual(1)
        })
    })

    test("Update an Entry into the table and verify", async () => {

        await db.connectDb(`UPDATE first_db_creation SET age = 36 WHERE full_Name="Kiran"`).then((result) => {
            console.log("chk changedRows----->"+JSON.stringify(result))
            expect(result.changedRows).toEqual(1)
        })

        await db.connectDb(`SELECT full_Name FROM first_db_creation WHERE age = 36`).then((result) => {
            console.log("chk changedRows fetch----->"+JSON.stringify(result))
            expect(result[0].full_Name).toEqual('Kiran')
        })
    })

    test("Verify that there is only one row where the city is Kadapa", async () => {

      await db.connectDb(`SELECT COUNT(*) as "rowCount" FROM first_db_creation WHERE location="Kadapa"`).then((result) => 
        {
            console.log("chk row count----->"+JSON.stringify(result))
            expect(result[0].rowCount).toEqual(1)
        })
    })

