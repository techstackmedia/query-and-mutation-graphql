import express from "express";
const app = express();
import morgan from "morgan";
import { graphqlHTTP } from "express-graphql";
import { typeDefs } from "./schema.js";
import { nanoid } from "nanoid";
app.use(morgan("dev"));

const resolvers = {
  staff() {
    const id = nanoid();
    return {
      _id: id,
      createdAt: Date.now(),
      company: "Dangote",
      employee: [
        { _id: id, name: id },
        { _id: id, name: id },
      ],
      departments: [
        {
          engineering: {
            name: "Bob",
            noofEmployees: 45,
            employee_Id: [id, id, id, id],
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
