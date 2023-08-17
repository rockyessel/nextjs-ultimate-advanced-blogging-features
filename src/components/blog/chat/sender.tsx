import React from 'react';
import { useSession } from 'next-auth/react';
import { gql, useMutation } from '@apollo/client';

const query = gql`
  mutation ChatCreate($author: ID!, $content: String!, $post: ID!) {
    chatCreate(
      input: {author: { link: $author }, content: $content, post: { link: $post }}
    ) {
      chat {
        content
        author {
          username
          name
          picture
        }
        id
        createdAt
      }
    }
  }
`;

const Sender = () => {
  const [addNewMessage] = useMutation(AddNewMessageMutation);
  return <div>Sender</div>;
};

export default Sender;
