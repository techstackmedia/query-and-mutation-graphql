import { buildSchema } from "graphql";

const typeDefs = buildSchema(`
    type Staff {
        _id: ID!
        createdAt: String
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
        employee_Id: [ID]
        manager: Int
    }

    input StaffInput {
        id: ID
        company: String
    }

    type Query {
        staff: Staff
    }

    type Mutation {
        staff(input: StaffInput): Staff
    }
`);

export { typeDefs };
