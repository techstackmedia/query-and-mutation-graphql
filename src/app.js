import express from "express";
const app = express();
import morgan from "morgan";
import { graphqlHTTP } from "express-graphql";
import { typeDefs } from "./schema.js";
app.use(morgan("dev"));

const resolvers = {
  Query: {
    staff() {
      return {
        id: "1345324451",
        company: "Dangote",
        employee: [
          { id: "232341234", name: "Jacky" },
          { id: "23513421", name: "Michael" },
        ],
        departments: [
          {
            engineering: {
              name: "Bob",
              noofEmployees: 45,
              employee_Id: ["7883563", "134235", "23561436", "21311235"],
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
