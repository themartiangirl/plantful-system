import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://f17858-6.myshopify.com/api/2023-10/graphql.json',
  headers: {
    'X-Shopify-Storefront-Access-Token': 'd49b666d29403b424451a92d47cb1f39',
  },
  cache: new InMemoryCache(),
});

export default client;

