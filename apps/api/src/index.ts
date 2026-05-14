import { createServer } from 'node:http'
import { createYoga } from 'graphql-yoga'
import { schema } from './schema.js'

const yoga = createYoga({ schema })

const server = createServer(yoga)

const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 4000

server.listen(PORT, () => {
  console.log(`GraphQL server running at http://localhost:${PORT}/graphql`)
})
