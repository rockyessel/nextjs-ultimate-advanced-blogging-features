import { DocumentNode, gql } from '@apollo/client';
import { GraphQLClient, Variables } from 'graphql-request';

export const authenticatedQuery = async (
  query: DocumentNode | string,
  variables: Variables
) => {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'x-api-key': process.env.GRAFBASE_API_KEY!,
  };
  const client = new GraphQLClient('http://127.0.0.1:4000/graphql', {
    headers,
  });

  const data = await client.request(query, variables);

  return data;
};

export const findUserByEmail = async (email: string) => {
  const query = gql`
    query User($email: Email!) {
      user(by: { email: $email }) {
        id
        email
        name
        username
        password
        picture
      }
    }
  `;

  const { user } = (await authenticatedQuery(query, { email })) as any;

  return user;
};

export const createUserUsingProvider = async (
  variables: Variables
): Promise<string> => {
  const query = gql`
    mutation UserCreate(
      $email: Email!
      $username: String
      $picture: String
      $name: String
    ) {
      userCreate(
        input: {
          email: $email
          username: $username
          picture: $picture
          name: $name
        }
      ) {
        user {
          id
        }
      }
    }
  `;

  const data = (await authenticatedQuery(query, variables)) as any;

  return data.userCreate.user.id as string;
};

export const findUserById = async (id: string) => {};

export const getCurrentUser = async () => {
  const response = await fetch('/api/auth/session');
  const data = await response.json();
  if (data.user) {
    const user = data?.user;
    return user;
  } else {
    return null;
  }
};
