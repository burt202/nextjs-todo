import {ApolloServer, gql} from "apollo-server-micro"
import {NextApiRequest, NextApiResponse} from "next"

const typeDefs = gql`
  type Query {
    tasks: [Task!]!
  }

  type Task {
    id: String
    name: String
  }
`

const resolvers = {
  Query: {
    tasks() {
      return [{id: "1", name: "Nextjs"}]
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
