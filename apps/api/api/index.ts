import { createYoga } from 'graphql-yoga';
import { schema } from '../src/schema.js';

const yoga = createYoga({
  schema,
  // Vercel sets the graphqlEndpoint to match the file-based route (/api)
  graphqlEndpoint: '/api',
});

export default yoga;
