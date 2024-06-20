import { createHandler } from "graphql-http/lib/use/express"
import express from "express"
import { ruruHTML } from "ruru/server"
import { makeExecutableSchema } from '@graphql-tools/schema';
import typeDefs from './graphql/schema';
import resolvers from "./graphql/resolvers"
import { connectToDB } from "./DB/util";
import { TContext, createContext } from "./graphql/context";

const app = express()

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

app.all(
    "/graphql",
    createHandler<TContext>({
        schema: schema,
        context: () => createContext()
    })
)


app.get("/", (_req, res) => {
    res.type("html")
    res.end(ruruHTML({ endpoint: "/graphql" }))
})

app.listen(3000, async () => {
    connectToDB()
    console.log('Server running at 3000');
});