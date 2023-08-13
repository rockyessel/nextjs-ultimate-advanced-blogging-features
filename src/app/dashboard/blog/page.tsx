'use client';

import Table from '@/components/dashboard/table';
import { PostCollectionResponse } from '@/interface';
import { gql, useQuery } from '@apollo/client';
import React from 'react';

interface Props {}

const query = gql`
  query PostCollection($first: Int) {
    postCollection(first: $first, orderBy: { createdAt: DESC }) {
      edges {
        node {
          title
          slug
          id
          status
          audio
          likes
          views
          comments(first: 10) {
            edges {
              node {
                id
              }
            }
          }
        }
      }
      pageInfo {
        hasPreviousPage
        hasNextPage
      }
    }
  }
`;
const DashboardBlogMain = () => {
  const { loading, error, data } = useQuery<PostCollectionResponse>(query, {
    variables: { first: 10 },
  });

  console.log('data', data);

  return (
    <div>
      <Table blogLists={data?.postCollection} />
    </div>
  );
};

export default DashboardBlogMain;
