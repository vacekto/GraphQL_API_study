import { Client } from "pg";


export const client = new Client(process.env.DB_QUERY_STRING)

export const connectToDB = async () => {
    try {
        await client.connect()
        console.log("connected to DB")
    }
    catch (err) {
        console.log("error connecting to DB, ", err)
    }
}