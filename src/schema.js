import { buildSchema } from "graphql";

const typeDefs = buildSchema(`
    type Staff {
        id: ID
        company: String
        employee: [User]
        departments: [Department]
    }

    type User {
        id: ID
        name: String
    }

    type Department {
        engineering: Engineering
    }

    type Engineering {
        name: String
        noofEmployees: Int
        employee_Id: [Int]
        manager: Int
    }

    type Query {
        user: [Staff]
    }

`);

export { typeDefs };