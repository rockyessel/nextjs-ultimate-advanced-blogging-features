
import { DocumentNode, gql } from '@apollo/client';
import {GraphQLClient } from 'graphql-request';

export const userAuth = async (variables: { email: string; password?: String }, query: DocumentNode) => {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'x-api-key': process.env.GRAFBASE_API_KEY!,
  };
  const client = new GraphQLClient('https://blog-main-rockyessel.grafbase.app/graphql', { headers });

  const data = await client.request(query, variables);

  return data;
};
