import { NextAuthOptions } from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import jsonwebtoken from 'jsonwebtoken';
import { JWT } from 'next-auth/jwt';
import bcrypt from 'bcrypt';
import { createUserUsingProvider, findUserByEmail } from '../api';

export const authOptions: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'password', type: 'password' },
      },
      async authorize(credentials) {
        try {
          if (!credentials?.email || !credentials?.password) {
            throw new Error('Invalid credentials');
          }
          const user = await findUserByEmail(credentials?.email);
          const isCorrectPassword = await bcrypt.compare(
            credentials?.password,
            user?.password
          );
          if (!isCorrectPassword) {
            throw new Error('Invalid credentials');
          }
          if (user && isCorrectPassword) {
            return user;
          } else {
            throw new Error('User do not exist');
          }
        } catch (error) {
          console.error('Error making GraphQL request:', error);
          throw error;
        }
      },
    }),
  ],

  // Configure the JWT (JSON Web Token) encoding and decoding functions
  jwt: {
    // Encoding function: Signs the token with specified data, secret, and expiration
    encode: ({ secret, token }) => {
      // console.log('jsonwebtoken', token);
      // console.log('jsonwebtoken secret', secret);

      return jsonwebtoken.sign(
        {
          ...token,
          iss: 'nextauth', // The issuer of the token
          exp: Math.floor(Date.now() / 1000) + 60 * 60 * 60, // Expiration time (1 hour from now)
        },
        secret
      );
    },

    // Decoding function: Verifies the token's integrity and returns the decoded data
    decode: async ({ secret, token }) => {
      // console.log('decode secret', secret);
      // console.log('decode', token);
      return jsonwebtoken.verify(token!, secret) as JWT;
    },
  },

  // Configure the authentication callbacks
  callbacks: {
    // JWT callback: Executed whenever a JSON Web Token is created or updated
    async jwt({ profile, token }) {
      let userId;
      if (token) {
        const user = await findUserByEmail(token.email!);
        if (user) {
          userId = user.id;
          token.sub = userId;
        } else {
          let customUser = {
            username: '',
            name: token.name,
            email: token.email,
            picture: token.picture,
          };
          // Github profile image
          if (profile && 'avatar_url' in profile && 'login' in profile) {
            customUser.picture = profile.avatar_url as string;
            token.username = profile.login as string;
          }
          const createdUser = await createUserUsingProvider(customUser);
          userId = createdUser;
          token.sub = userId;
        }
      }
      return token;
    },

    // // Session callback: Executed whenever a new session is created or updated
    async session({ session, token }) {
      if (token.username) {
        const user = { ...session?.user!, username: token.username as string | null | undefined };
        session.user = user;
      }
      return session;
    },
  },
};