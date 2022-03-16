import {ApolloServer, gql} from "apollo-server-micro"
import {NextApiRequest, NextApiResponse} from "next"
import * as uuid from "uuid"
import {MutationAddTaskArgs} from "./generated.graphql.types"

const typeDefs = gql`
  type Query {
    tasks: [Task!]!
  }

  type Mutation {
    addTask(name: String!): Task!
  }

  type Task {
    id: String!
    name: String!
  }
`

const tasks = [
  {id: "ed0ecc9c-165f-413e-bdc2-8f0752a9a2dd", name: "Task 1"},
  {id: "06931642-7b9f-4bc1-b184-84e7bd3f2115", name: "Task 2"},
  {id: "4d827d60-966a-4e83-87d9-e4bd67430af5", name: "Task 3"},
]

const resolvers = {
  Query: {
    tasks() {
      return tasks
    },
  },
  Mutation: {
    addTask(_: void, args: MutationAddTaskArgs) {
      const task = {id: uuid.v4(), name: args.name}
      tasks.push(task)
      return task
    },
  },
}

const apolloServer = new ApolloServer({typeDefs, resolvers})

const startServer = apolloServer.start()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  await startServer

  await apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res)
}

export const config = {
  api: {
    bodyParser: false,
  },
}
