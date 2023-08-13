'use client';
import React from 'react'
import { useMemo } from 'react';
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
  from,
  split,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { SSELink, isLiveQuery } from '@grafbase/apollo-link';
import { getOperationAST } from 'graphql';

const httpLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_GRAFBASE_API_URL,
});

const sseLink = new SSELink({
  uri: process.env.NEXT_PUBLIC_GRAFBASE_API_URL!,
});

interface Props {
  children: React.ReactNode
}

export const ApolloProviderWrapper = (props:Props) => {
  const client = useMemo(() => {
    const authMiddleware = setContext(async (_, { headers }) => {
      const { token } = await fetch('/api/auth/token').then((res) =>
        res.json()
      );

      console.log('token', token);

      return {
        headers: {
          ...headers,
          authorization: `Bearer ${token}`,
        },
      };
    });

    return new ApolloClient({
      link: from([
        authMiddleware,
        split(
          ({ query, operationName, variables }) =>
            isLiveQuery(getOperationAST(query, operationName), variables),
          sseLink,
          httpLink
        ),
        httpLink,
      ]),
      cache: new InMemoryCache(),
    });
  }, []);

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
};
