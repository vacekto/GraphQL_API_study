FROM node:20.9.0-alpine

ARG NODE_ENV=development

ENV NODE_ENV=$NODE_ENV

ENV DB_QUERY_STRING=postgres://arthur:xvQqwww2Kczb7cuJ2dvfPy15abC@dontpanic.k42.app/galaxy

WORKDIR /api

COPY package.json .

RUN npm i

COPY . .

CMD ["npm","run","dev"]