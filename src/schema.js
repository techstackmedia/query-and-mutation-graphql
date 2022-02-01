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
        employee_Id: [ID]
        manager: Int
    }

    input NewStaffInput {
        id: ID
    }

    type Query {
        staff: Staff
    }

    type Mutation {
        staff(input: NewStaffInput): Staff
    }

`);

export { typeDefs };
