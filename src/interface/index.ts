import React from 'react';

export interface LayoutRootProps {
  children: React.ReactNode;
}

export interface Chat {
  id: string;
  content: string;
  post: {
    id: string;
  };
  author: {
    name: string;
    picture: string;
    username: string;
    id: string;
  };
}

export interface ChatCollectionQuery {
  chatCollection: {
    edges: Array<{
      node: Chat;
    }>;
  };
}
export interface Post {
  title: string;
  caption: string | null;
  slug: string;
  content: string;
  publishedAt: string;
  comments: Comment[];
  likes: number;
  views: number;
  tags: string[];
  author: User;
  audio: string | null;
  chats: Chat[];
  status: string;
  includedUsers: User[];
}

export interface Comment {
  post: Post;
  body: string;
  likes: number;
  author: User | null;
}
export interface Edge {
  node: Post;
}

export interface PageInfo {
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}

export interface PostCollectionResponse {
  postCollection: {
    edges: Edge[];
    pageInfo: PageInfo;
  };
}

export interface UserProps {
  id: string;
  name: string;
  username: string;
  email: string;
  picture: string;
}

export interface User {
  email: string;
  password: string | null;
  picture: string | null;
  name: string | null;
  username: string | null;
  posts: Post[];
  comments: Comment[];
}

export interface Query {
  // Define your query fields here
}

export interface Mutation {
  // Define your mutation fields here
}

export interface Schema {
  query: Query;
  mutation: Mutation;
}
