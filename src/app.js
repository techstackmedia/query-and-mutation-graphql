import express from "express";
const app = express();
import morgan from "morgan";
import { graphqlHTTP } from "express-graphql";
import { typeDefs } from "./schema.js";
import { nanoid } from "nanoid";
app.use(morgan("dev"));

const resolvers = {
  staff() {
    return {
      id: nanoid(),
      createdAt: Date.now(),
      company: "Dangote",
      employee: [
        { id: nanoid(), name: nanoid() },
        { id: nanoid(), name: nanoid() },
      ],
      departments: [
        {
          engineering: {
            name: "Bob",
            noofEmployees: 45,
            employee_Id: [nanoid(), nanoid(), nanoid(), nanoid()],
            manager: 3,
          },
        },
      ],
    };
  },
  Mutation: {
    staff(_, { input }) {
      return input;
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
