import React from 'react'
import { useSession } from 'next-auth/react';
import { gql, useMutation } from '@apollo/client';

const Sender = () => {
    const [addNewMessage] = useMutation(AddNewMessageMutation);
  return (
    <div>Sender</div>
  )
}

export default Sender