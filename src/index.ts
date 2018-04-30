import { GraphQLServer } from 'graphql-yoga'
import { GQLResolver, GQLProduct } from './schemas.d';
import { Props } from 'graphql-yoga/dist/src/types';
const typeDefs = 'src/schemas.graphql'

const resolvers = {
  Query: {
    product: async (_, {id}) => {
      return {
        id: new Date().getTime().toString(),
        name: 'test 1',
        createdDate: new Date()
      }
    }
  }
} as GQLResolver

const server = new GraphQLServer({ typeDefs, resolvers } as Props)
server.start(() => console.log('Server is running on http://localhost:4000'))
