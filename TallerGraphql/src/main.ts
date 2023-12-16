import { createYoga } from "graphql-yoga";
import { createServer } from "node:http";
import { schema } from "./schema";

export const yoga = createYoga({
  graphiql: (_) => {
    return {
      title: "TechSchool V2 - GraphQL Pokédex",
    };
  },
  schema,
  logging: "debug",
});

const server = createServer(yoga);

server.listen(3000, () => {
  console.log("Visit http://localhost:3000/graphql");
});
