'use client';

import React, { useRef, useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import { useSession } from 'next-auth/react';
import { isObjectEmpty, stringToSlugValue } from '@/lib/helpers';
import RightSidebar from '../sidebar/right';

interface Props {}

const PublishBlogPost = gql`
  mutation PostCreate(
    $author: ID!
    $title: String!
    $caption: String
    $slug: String!
    $content: String!
    $publishedAt: String!
    $audio: String
  ) {
    postCreate(
      input: {
        author: { link: $author }
        title: $title
        caption: $caption
        slug: $slug
        content: $content
        publishedAt: $publishedAt
        audio: $audio
      }
    ) {
      post {
        id
        status
        author {
          email
          id
        }
        views
        likes
        title
        slug
        content
      }
    }
  }
`;

const initialPostForm = { title: '', caption: '', content: '' };

const CreateBlogPost = () => {
  const [publishPost] = useMutation(PublishBlogPost);
  const [postForm, setPostFrom] = React.useState(initialPostForm);

  const handlePostFormChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { target } = event;

    setPostFrom((initialForm) => ({
      ...initialForm,
      [target.name]: target.value,
    }));
  };

  const { data: session } = useSession();
  const user = { ...session?.user } as any;
  console.log('user', user);

  const handleFormSubmission = async (event: any) => {
    event.preventDefault();

    console.log('isObjectEmpty :', !isObjectEmpty(postForm));
    console.log('postForm :', postForm);

    const ttsObj = { title: postForm.title, content: postForm.content };
    const response = await fetch('/api/tts', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(ttsObj),
    });

    try {
      const data = await response.json(); // Await the JSON data

      console.log('url', data.url);

      if (session && !isObjectEmpty(postForm)) {
        if (response.ok) {
          const publishResponse = await publishPost({
            variables: {
              ...postForm,
              author: user?.id,
              audio: data.url,
              slug: stringToSlugValue(postForm.title.toLowerCase()),
              publishedAt: new Date().toISOString(),
            },
          });

          console.log('data :', publishResponse);
        }
      }
    } catch (error) {
      console.error('Error:', error);
    }

    setPostFrom(initialPostForm);
  };

  return (
    <>
      <form className='flex-1' onSubmit={handleFormSubmission}>
        <fieldset>
          <textarea
            id='contextMenu'
            name='title'
            value={postForm.title}
            className='outline-none border-none w-full text-[3rem] leading-none'
            placeholder='Post Title'
            onChange={handlePostFormChange}
          ></textarea>
        </fieldset>
        <fieldset>
          <textarea
            name='content'
            value={postForm.content}
            className='outline-none border-none w-full text-[1.2rem] '
            placeholder='Just your first words....'
            onChange={handlePostFormChange}
          ></textarea>
        </fieldset>
      </form>

      <RightSidebar />
    </>
  );
};

export default CreateBlogPost;
