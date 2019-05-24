import React from 'react';
import CreatePost from '../containers/posts/CreatePost';
import AllPosts from '../containers/posts/AllPosts';

import CommentForm from '../components/comments/CommentForm';

export default function Home() {
  return (
    <>
      <h1>Posts</h1>
      <section>
        <h2>Create Post</h2>
        <CreatePost />
      </section>
      <section>
        <AllPosts />
      </section>
      <CommentForm />
    </>
  );
}
