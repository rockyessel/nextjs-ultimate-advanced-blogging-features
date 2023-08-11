import bcrypt from 'bcrypt';
import { gql } from '@apollo/client';
import { NextResponse } from 'next/server';
import { userAuth } from '@/lib/api';

export const POST = async (request: Request) => {
  const body = await request.json();
  const { email, password } = body;
  try {
    const query = gql`
      mutation UserCreate($email: Email!, $password: String) {
        userCreate(input: { email: $email, password: $password }) {
          user {
            id
            email
          }
        }
      }
    `;
    const hashedPassword = await bcrypt.hash(password, 12);
    const variables = {
      email,
      password: hashedPassword,
    };
    const data = await userAuth(variables, query);
    return NextResponse.json({ user: data });
  } catch (error) {
    return NextResponse.json({ error });
  }
};
