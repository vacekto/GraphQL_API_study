Koala GraphQL assignment

# About
Simple Graphql Typescript API. To be honest, this task took me longer then I would like. While I new basic contepts, for example that GraphQL lets users select any prop in a single request, I bashed (pun unintended) my head on all sorts of problems, from setting up environment, to remebering SQL queries to best approach to file structure, simply because I had never tried to build GraphQL api up until now. 
The whole task took me about 20 to 25 hours and leaves much to be desired. Like any proper API, there should be some sort of test coverage, altough writhing tests is not my favourite pastime, CI/CD pipeline would be nice, not to mention that project currently isnt deployed anywhere runs only locally.

# Dev stack
- Docker
- Typescript
- Graphql-http
- express
- codegen (for generating types from .graphql schema files)
- pg (PostgresQL client)


# Takeaway
Main takeaway is not to get sidetracked. Instructions specificelly mentioned not to strive for perfectionism, but simple get the job done to working version in as little time as possible. This is generally my weakness, one on which I will work in the future

# to run (linux, bash and Docker required)
- clone repo
- run ./bin/build.sh
- run ./bin/run.sh
