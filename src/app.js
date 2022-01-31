import express from "express";
const app = express();
import morgan from "morgan";
import { graphqlHTTP } from "express-graphql";
import { typeDefs } from "./schema.js";
app.use(morgan("dev"));

const resolvers = {
  Query: {
    user() {
      return {
        id: "1345324451",
        company: "Dangote",
        employee: [
          { id: 3, name: "Jacky" },
          { id: 4, name: "Michael" },
        ],
        departments: [
          {
            engineering: {
              name: "Bob",
              noofEmployees: 45,
              employee_Id: [2, 4, 7, 3],
              manager: 3,
            },
          },
        ],
      };
    },
  },
};

app.use(
  "/graphql",
  graphqlHTTP({
    schema: typeDefs,
    rootValue: resolvers,
    graphiql: true,
  })
);

export default app;
