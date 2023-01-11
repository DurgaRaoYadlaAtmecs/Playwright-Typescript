import { test as myTest } from "@playwright/test";

// type Durga = {
//     age: number,
//     email: string
// }

const myFixtureTest = myTest.extend<{
    age: number,
    email: string
}>({
    age: 27,
    email: "durgarao@gmail.com"
})

export const test = myFixtureTest;