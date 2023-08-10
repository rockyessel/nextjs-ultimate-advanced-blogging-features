export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  Email: { input: any; output: any; }
};

export type Comment = {
  __typename?: 'Comment';
  author?: Maybe<User>;
  body: Scalars['String']['output'];
  /** when the model was created */
  createdAt: Scalars['DateTime']['output'];
  /** Unique identifier */
  id: Scalars['ID']['output'];
  likes?: Maybe<Scalars['Int']['output']>;
  post: Post;
  /** when the model was updated */
  updatedAt: Scalars['DateTime']['output'];
};

export type CommentByInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type CommentCollectionFilterInput = {
  id?: InputMaybe<IdCollectionFilterInput>;
};

export type CommentConnection = {
  __typename?: 'CommentConnection';
  edges?: Maybe<Array<Maybe<CommentEdge>>>;
  /** Information to aid in pagination */
  pageInfo: PageInfo;
};

/** Input to create a Comment */
export type CommentCreateInput = {
  author?: InputMaybe<CommentToUserCreateUserRelation>;
  body: Scalars['String']['input'];
  likes?: InputMaybe<Scalars['Int']['input']>;
  post: CommentToPostCreatePostRelation;
};

export type CommentCreateManyInput = {
  input: CommentCreateInput;
};

export type CommentCreateManyPayload = {
  __typename?: 'CommentCreateManyPayload';
  commentCollection: Array<Comment>;
};

export type CommentCreatePayload = {
  __typename?: 'CommentCreatePayload';
  comment?: Maybe<Comment>;
};

export type CommentDeleteManyInput = {
  by: CommentByInput;
};

export type CommentDeleteManyPayload = {
  __typename?: 'CommentDeleteManyPayload';
  deletedIds: Array<Scalars['ID']['output']>;
};

export type CommentDeletePayload = {
  __typename?: 'CommentDeletePayload';
  deletedId: Scalars['ID']['output'];
};

export type CommentEdge = {
  __typename?: 'CommentEdge';
  cursor: Scalars['String']['output'];
  node: Comment;
};

export type CommentOrderByInput = {
  createdAt?: InputMaybe<OrderByDirection>;
};

export type CommentSearchConnection = {
  __typename?: 'CommentSearchConnection';
  edges: Array<CommentSearchEdge>;
  pageInfo: PageInfo;
  searchInfo?: Maybe<SearchInfo>;
};

export type CommentSearchEdge = {
  __typename?: 'CommentSearchEdge';
  cursor: Scalars['String']['output'];
  node: Comment;
  score: Scalars['Float']['output'];
};

export type CommentSearchFilterInput = {
  ALL?: InputMaybe<Array<CommentSearchFilterInput>>;
  ANY?: InputMaybe<Array<CommentSearchFilterInput>>;
  NONE?: InputMaybe<Array<CommentSearchFilterInput>>;
  NOT?: InputMaybe<CommentSearchFilterInput>;
  body?: InputMaybe<StringSearchFilterInput>;
  createdAt?: InputMaybe<DateTimeSearchFilterInput>;
  likes?: InputMaybe<IntOrNullSearchFilterInput>;
  updatedAt?: InputMaybe<DateTimeSearchFilterInput>;
};

/** Input to create a Comment for the CommentToPost relation of Post */
export type CommentToPostCreateComment = {
  author?: InputMaybe<CommentToUserCreateUserRelation>;
  body: Scalars['String']['input'];
  likes?: InputMaybe<Scalars['Int']['input']>;
};

/** Input to link to or create a Comment for the CommentToPost relation of Post */
export type CommentToPostCreateCommentRelation = {
  create?: InputMaybe<CommentToPostCreateComment>;
  link?: InputMaybe<Scalars['ID']['input']>;
};

/** Input to create a Post for the CommentToPost relation of Comment */
export type CommentToPostCreatePost = {
  author?: InputMaybe<PostToUserCreateUserRelation>;
  comments?: InputMaybe<Array<InputMaybe<CommentToPostCreateCommentRelation>>>;
  content?: InputMaybe<Scalars['String']['input']>;
  likes?: InputMaybe<Scalars['Int']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  slug: Scalars['String']['input'];
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title: Scalars['String']['input'];
};

/** Input to link to or create a Post for the CommentToPost relation of Comment */
export type CommentToPostCreatePostRelation = {
  create?: InputMaybe<CommentToPostCreatePost>;
  link?: InputMaybe<Scalars['ID']['input']>;
};

/** Input to link/unlink to or create a Comment for the CommentToPost relation of Post */
export type CommentToPostUpdateCommentRelation = {
  create?: InputMaybe<CommentToPostCreateComment>;
  link?: InputMaybe<Scalars['ID']['input']>;
  unlink?: InputMaybe<Scalars['ID']['input']>;
};

/** Input to link/unlink to or create a Post for the CommentToPost relation of Comment */
export type CommentToPostUpdatePostRelation = {
  create?: InputMaybe<CommentToPostCreatePost>;
  link?: InputMaybe<Scalars['ID']['input']>;
  unlink?: InputMaybe<Scalars['ID']['input']>;
};

/** Input to create a Comment for the CommentToUser relation of User */
export type CommentToUserCreateComment = {
  body: Scalars['String']['input'];
  likes?: InputMaybe<Scalars['Int']['input']>;
  post: CommentToPostCreatePostRelation;
};

/** Input to link to or create a Comment for the CommentToUser relation of User */
export type CommentToUserCreateCommentRelation = {
  create?: InputMaybe<CommentToUserCreateComment>;
  link?: InputMaybe<Scalars['ID']['input']>;
};

/** Input to create a User for the CommentToUser relation of Comment */
export type CommentToUserCreateUser = {
  comments?: InputMaybe<Array<InputMaybe<CommentToUserCreateCommentRelation>>>;
  email?: InputMaybe<Scalars['Email']['input']>;
  name: Scalars['String']['input'];
  posts?: InputMaybe<Array<InputMaybe<PostToUserCreatePostRelation>>>;
};

/** Input to link to or create a User for the CommentToUser relation of Comment */
export type CommentToUserCreateUserRelation = {
  create?: InputMaybe<CommentToUserCreateUser>;
  link?: InputMaybe<Scalars['ID']['input']>;
};

/** Input to link/unlink to or create a Comment for the CommentToUser relation of User */
export type CommentToUserUpdateCommentRelation = {
  create?: InputMaybe<CommentToUserCreateComment>;
  link?: InputMaybe<Scalars['ID']['input']>;
  unlink?: InputMaybe<Scalars['ID']['input']>;
};

/** Input to link/unlink to or create a User for the CommentToUser relation of Comment */
export type CommentToUserUpdateUserRelation = {
  create?: InputMaybe<CommentToUserCreateUser>;
  link?: InputMaybe<Scalars['ID']['input']>;
  unlink?: InputMaybe<Scalars['ID']['input']>;
};

/** Input to update a Comment */
export type CommentUpdateInput = {
  author?: InputMaybe<CommentToUserUpdateUserRelation>;
  body?: InputMaybe<Scalars['String']['input']>;
  likes?: InputMaybe<IntOperationsInput>;
  post?: InputMaybe<CommentToPostUpdatePostRelation>;
};

export type CommentUpdateManyInput = {
  by: CommentByInput;
  input: CommentUpdateInput;
};

export type CommentUpdateManyPayload = {
  __typename?: 'CommentUpdateManyPayload';
  commentCollection: Array<Comment>;
};

export type CommentUpdatePayload = {
  __typename?: 'CommentUpdatePayload';
  comment?: Maybe<Comment>;
};

export type DateTimeOrNullSearchFilterInput = {
  ALL?: InputMaybe<Array<DateTimeOrNullSearchFilterInput>>;
  ANY?: InputMaybe<Array<DateTimeOrNullSearchFilterInput>>;
  NONE?: InputMaybe<Array<DateTimeOrNullSearchFilterInput>>;
  NOT?: InputMaybe<DateTimeOrNullSearchFilterInput>;
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  neq?: InputMaybe<Scalars['DateTime']['input']>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type DateTimeSearchFilterInput = {
  ALL?: InputMaybe<Array<DateTimeSearchFilterInput>>;
  ANY?: InputMaybe<Array<DateTimeSearchFilterInput>>;
  NONE?: InputMaybe<Array<DateTimeSearchFilterInput>>;
  NOT?: InputMaybe<DateTimeSearchFilterInput>;
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  neq?: InputMaybe<Scalars['DateTime']['input']>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type IdCollectionFilterInput = {
  in?: InputMaybe<Array<Scalars['ID']['input']>>;
};

/** Possible operations for an Int field */
export type IntOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']['input']>;
  increment?: InputMaybe<Scalars['Int']['input']>;
  set?: InputMaybe<Scalars['Int']['input']>;
};

export type IntOrNullSearchFilterInput = {
  ALL?: InputMaybe<Array<IntOrNullSearchFilterInput>>;
  ANY?: InputMaybe<Array<IntOrNullSearchFilterInput>>;
  NONE?: InputMaybe<Array<IntOrNullSearchFilterInput>>;
  NOT?: InputMaybe<IntOrNullSearchFilterInput>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  neq?: InputMaybe<Scalars['Int']['input']>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Create a Comment */
  commentCreate?: Maybe<CommentCreatePayload>;
  /** Create multiple Comment */
  commentCreateMany?: Maybe<CommentCreateManyPayload>;
  /** Delete a Comment by ID or unique field */
  commentDelete?: Maybe<CommentDeletePayload>;
  /** Delete multiple Comment */
  commentDeleteMany?: Maybe<CommentDeleteManyPayload>;
  /** Update a Comment */
  commentUpdate?: Maybe<CommentUpdatePayload>;
  /** Update multiple Comment */
  commentUpdateMany?: Maybe<CommentUpdateManyPayload>;
  /** Create a Post */
  postCreate?: Maybe<PostCreatePayload>;
  /** Create multiple Post */
  postCreateMany?: Maybe<PostCreateManyPayload>;
  /** Delete a Post by ID or unique field */
  postDelete?: Maybe<PostDeletePayload>;
  /** Delete multiple Post */
  postDeleteMany?: Maybe<PostDeleteManyPayload>;
  /** Update a Post */
  postUpdate?: Maybe<PostUpdatePayload>;
  /** Update multiple Post */
  postUpdateMany?: Maybe<PostUpdateManyPayload>;
  /** Create a User */
  userCreate?: Maybe<UserCreatePayload>;
  /** Create multiple User */
  userCreateMany?: Maybe<UserCreateManyPayload>;
  /** Delete a User by ID or unique field */
  userDelete?: Maybe<UserDeletePayload>;
  /** Delete multiple User */
  userDeleteMany?: Maybe<UserDeleteManyPayload>;
  /** Update a User */
  userUpdate?: Maybe<UserUpdatePayload>;
  /** Update multiple User */
  userUpdateMany?: Maybe<UserUpdateManyPayload>;
};


export type MutationCommentCreateArgs = {
  input: CommentCreateInput;
};


export type MutationCommentCreateManyArgs = {
  input: Array<CommentCreateManyInput>;
};


export type MutationCommentDeleteArgs = {
  by: CommentByInput;
};


export type MutationCommentDeleteManyArgs = {
  input: Array<CommentDeleteManyInput>;
};


export type MutationCommentUpdateArgs = {
  by: CommentByInput;
  input: CommentUpdateInput;
};


export type MutationCommentUpdateManyArgs = {
  input: Array<CommentUpdateManyInput>;
};


export type MutationPostCreateArgs = {
  input: PostCreateInput;
};


export type MutationPostCreateManyArgs = {
  input: Array<PostCreateManyInput>;
};


export type MutationPostDeleteArgs = {
  by: PostByInput;
};


export type MutationPostDeleteManyArgs = {
  input: Array<PostDeleteManyInput>;
};


export type MutationPostUpdateArgs = {
  by: PostByInput;
  input: PostUpdateInput;
};


export type MutationPostUpdateManyArgs = {
  input: Array<PostUpdateManyInput>;
};


export type MutationUserCreateArgs = {
  input: UserCreateInput;
};


export type MutationUserCreateManyArgs = {
  input: Array<UserCreateManyInput>;
};


export type MutationUserDeleteArgs = {
  by: UserByInput;
};


export type MutationUserDeleteManyArgs = {
  input: Array<UserDeleteManyInput>;
};


export type MutationUserUpdateArgs = {
  by: UserByInput;
  input: UserUpdateInput;
};


export type MutationUserUpdateManyArgs = {
  input: Array<UserUpdateManyInput>;
};

export enum OrderByDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Post = {
  __typename?: 'Post';
  author?: Maybe<User>;
  comments?: Maybe<CommentConnection>;
  content?: Maybe<Scalars['String']['output']>;
  /** when the model was created */
  createdAt: Scalars['DateTime']['output'];
  /** Unique identifier */
  id: Scalars['ID']['output'];
  likes?: Maybe<Scalars['Int']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  slug: Scalars['String']['output'];
  tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  title: Scalars['String']['output'];
  /** when the model was updated */
  updatedAt: Scalars['DateTime']['output'];
};


export type PostCommentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PostOrderByInput>;
};

export type PostByInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type PostCollectionFilterInput = {
  id?: InputMaybe<IdCollectionFilterInput>;
};

export type PostConnection = {
  __typename?: 'PostConnection';
  edges?: Maybe<Array<Maybe<PostEdge>>>;
  /** Information to aid in pagination */
  pageInfo: PageInfo;
};

/** Input to create a Post */
export type PostCreateInput = {
  author?: InputMaybe<PostToUserCreateUserRelation>;
  comments?: InputMaybe<Array<InputMaybe<CommentToPostCreateCommentRelation>>>;
  content?: InputMaybe<Scalars['String']['input']>;
  likes?: InputMaybe<Scalars['Int']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  slug: Scalars['String']['input'];
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title: Scalars['String']['input'];
};

export type PostCreateManyInput = {
  input: PostCreateInput;
};

export type PostCreateManyPayload = {
  __typename?: 'PostCreateManyPayload';
  postCollection: Array<Post>;
};

export type PostCreatePayload = {
  __typename?: 'PostCreatePayload';
  post?: Maybe<Post>;
};

export type PostDeleteManyInput = {
  by: PostByInput;
};

export type PostDeleteManyPayload = {
  __typename?: 'PostDeleteManyPayload';
  deletedIds: Array<Scalars['ID']['output']>;
};

export type PostDeletePayload = {
  __typename?: 'PostDeletePayload';
  deletedId: Scalars['ID']['output'];
};

export type PostEdge = {
  __typename?: 'PostEdge';
  cursor: Scalars['String']['output'];
  node: Post;
};

export type PostOrderByInput = {
  createdAt?: InputMaybe<OrderByDirection>;
};

export type PostSearchConnection = {
  __typename?: 'PostSearchConnection';
  edges: Array<PostSearchEdge>;
  pageInfo: PageInfo;
  searchInfo?: Maybe<SearchInfo>;
};

export type PostSearchEdge = {
  __typename?: 'PostSearchEdge';
  cursor: Scalars['String']['output'];
  node: Post;
  score: Scalars['Float']['output'];
};

export type PostSearchFilterInput = {
  ALL?: InputMaybe<Array<PostSearchFilterInput>>;
  ANY?: InputMaybe<Array<PostSearchFilterInput>>;
  NONE?: InputMaybe<Array<PostSearchFilterInput>>;
  NOT?: InputMaybe<PostSearchFilterInput>;
  content?: InputMaybe<StringOrNullSearchFilterInput>;
  createdAt?: InputMaybe<DateTimeSearchFilterInput>;
  likes?: InputMaybe<IntOrNullSearchFilterInput>;
  publishedAt?: InputMaybe<DateTimeOrNullSearchFilterInput>;
  slug?: InputMaybe<StringSearchFilterInput>;
  tags?: InputMaybe<StringListSearchFilterInput>;
  title?: InputMaybe<StringSearchFilterInput>;
  updatedAt?: InputMaybe<DateTimeSearchFilterInput>;
};

/** Input to create a Post for the PostToUser relation of User */
export type PostToUserCreatePost = {
  comments?: InputMaybe<Array<InputMaybe<CommentToPostCreateCommentRelation>>>;
  content?: InputMaybe<Scalars['String']['input']>;
  likes?: InputMaybe<Scalars['Int']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  slug: Scalars['String']['input'];
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title: Scalars['String']['input'];
};

/** Input to link to or create a Post for the PostToUser relation of User */
export type PostToUserCreatePostRelation = {
  create?: InputMaybe<PostToUserCreatePost>;
  link?: InputMaybe<Scalars['ID']['input']>;
};

/** Input to create a User for the PostToUser relation of Post */
export type PostToUserCreateUser = {
  comments?: InputMaybe<Array<InputMaybe<CommentToUserCreateCommentRelation>>>;
  email?: InputMaybe<Scalars['Email']['input']>;
  name: Scalars['String']['input'];
  posts?: InputMaybe<Array<InputMaybe<PostToUserCreatePostRelation>>>;
};

/** Input to link to or create a User for the PostToUser relation of Post */
export type PostToUserCreateUserRelation = {
  create?: InputMaybe<PostToUserCreateUser>;
  link?: InputMaybe<Scalars['ID']['input']>;
};

/** Input to link/unlink to or create a Post for the PostToUser relation of User */
export type PostToUserUpdatePostRelation = {
  create?: InputMaybe<PostToUserCreatePost>;
  link?: InputMaybe<Scalars['ID']['input']>;
  unlink?: InputMaybe<Scalars['ID']['input']>;
};

/** Input to link/unlink to or create a User for the PostToUser relation of Post */
export type PostToUserUpdateUserRelation = {
  create?: InputMaybe<PostToUserCreateUser>;
  link?: InputMaybe<Scalars['ID']['input']>;
  unlink?: InputMaybe<Scalars['ID']['input']>;
};

/** Input to update a Post */
export type PostUpdateInput = {
  author?: InputMaybe<PostToUserUpdateUserRelation>;
  comments?: InputMaybe<Array<InputMaybe<CommentToPostUpdateCommentRelation>>>;
  content?: InputMaybe<Scalars['String']['input']>;
  likes?: InputMaybe<IntOperationsInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type PostUpdateManyInput = {
  by: PostByInput;
  input: PostUpdateInput;
};

export type PostUpdateManyPayload = {
  __typename?: 'PostUpdateManyPayload';
  postCollection: Array<Post>;
};

export type PostUpdatePayload = {
  __typename?: 'PostUpdatePayload';
  post?: Maybe<Post>;
};

export type Query = {
  __typename?: 'Query';
  /** Query a single Comment by an ID or a unique field */
  comment?: Maybe<Comment>;
  /** Paginated query to fetch the whole list of `Comment`. */
  commentCollection?: Maybe<CommentConnection>;
  /** Search `Comment` */
  commentSearch?: Maybe<CommentSearchConnection>;
  /** Query a single Post by an ID or a unique field */
  post?: Maybe<Post>;
  /** Paginated query to fetch the whole list of `Post`. */
  postCollection?: Maybe<PostConnection>;
  /** Search `Post` */
  postSearch?: Maybe<PostSearchConnection>;
  /** Query a single User by an ID or a unique field */
  user?: Maybe<User>;
  /** Paginated query to fetch the whole list of `User`. */
  userCollection?: Maybe<UserConnection>;
};


export type QueryCommentArgs = {
  by: CommentByInput;
};


export type QueryCommentCollectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<CommentCollectionFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CommentOrderByInput>;
};


export type QueryCommentSearchArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  fields?: InputMaybe<Array<Scalars['String']['input']>>;
  filter?: InputMaybe<CommentSearchFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPostArgs = {
  by: PostByInput;
};


export type QueryPostCollectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PostCollectionFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PostOrderByInput>;
};


export type QueryPostSearchArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  fields?: InputMaybe<Array<Scalars['String']['input']>>;
  filter?: InputMaybe<PostSearchFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
};


export type QueryUserArgs = {
  by: UserByInput;
};


export type QueryUserCollectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<UserCollectionFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<UserOrderByInput>;
};

export type SearchInfo = {
  __typename?: 'SearchInfo';
  totalHits: Scalars['Int']['output'];
};

export type StringListSearchFilterInput = {
  includes?: InputMaybe<StringSearchFilterInput>;
  includesNone?: InputMaybe<StringSearchFilterInput>;
  isEmpty?: InputMaybe<Scalars['Boolean']['input']>;
};

export type StringOrNullSearchFilterInput = {
  ALL?: InputMaybe<Array<StringOrNullSearchFilterInput>>;
  ANY?: InputMaybe<Array<StringOrNullSearchFilterInput>>;
  NONE?: InputMaybe<Array<StringOrNullSearchFilterInput>>;
  NOT?: InputMaybe<StringOrNullSearchFilterInput>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  regex?: InputMaybe<Scalars['String']['input']>;
};

export type StringSearchFilterInput = {
  ALL?: InputMaybe<Array<StringSearchFilterInput>>;
  ANY?: InputMaybe<Array<StringSearchFilterInput>>;
  NONE?: InputMaybe<Array<StringSearchFilterInput>>;
  NOT?: InputMaybe<StringSearchFilterInput>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  regex?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  comments?: Maybe<CommentConnection>;
  /** when the model was created */
  createdAt: Scalars['DateTime']['output'];
  email?: Maybe<Scalars['Email']['output']>;
  /** Unique identifier */
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  posts?: Maybe<PostConnection>;
  /** when the model was updated */
  updatedAt: Scalars['DateTime']['output'];
};


export type UserCommentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<UserOrderByInput>;
};


export type UserPostsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<UserOrderByInput>;
};

export type UserByInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type UserCollectionFilterInput = {
  id?: InputMaybe<IdCollectionFilterInput>;
};

export type UserConnection = {
  __typename?: 'UserConnection';
  edges?: Maybe<Array<Maybe<UserEdge>>>;
  /** Information to aid in pagination */
  pageInfo: PageInfo;
};

/** Input to create a User */
export type UserCreateInput = {
  comments?: InputMaybe<Array<InputMaybe<CommentToUserCreateCommentRelation>>>;
  email?: InputMaybe<Scalars['Email']['input']>;
  name: Scalars['String']['input'];
  posts?: InputMaybe<Array<InputMaybe<PostToUserCreatePostRelation>>>;
};

export type UserCreateManyInput = {
  input: UserCreateInput;
};

export type UserCreateManyPayload = {
  __typename?: 'UserCreateManyPayload';
  userCollection: Array<User>;
};

export type UserCreatePayload = {
  __typename?: 'UserCreatePayload';
  user?: Maybe<User>;
};

export type UserDeleteManyInput = {
  by: UserByInput;
};

export type UserDeleteManyPayload = {
  __typename?: 'UserDeleteManyPayload';
  deletedIds: Array<Scalars['ID']['output']>;
};

export type UserDeletePayload = {
  __typename?: 'UserDeletePayload';
  deletedId: Scalars['ID']['output'];
};

export type UserEdge = {
  __typename?: 'UserEdge';
  cursor: Scalars['String']['output'];
  node: User;
};

export type UserOrderByInput = {
  createdAt?: InputMaybe<OrderByDirection>;
};

/** Input to update a User */
export type UserUpdateInput = {
  comments?: InputMaybe<Array<InputMaybe<CommentToUserUpdateCommentRelation>>>;
  email?: InputMaybe<Scalars['Email']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  posts?: InputMaybe<Array<InputMaybe<PostToUserUpdatePostRelation>>>;
};

export type UserUpdateManyInput = {
  by: UserByInput;
  input: UserUpdateInput;
};

export type UserUpdateManyPayload = {
  __typename?: 'UserUpdateManyPayload';
  userCollection: Array<User>;
};

export type UserUpdatePayload = {
  __typename?: 'UserUpdatePayload';
  user?: Maybe<User>;
};
