import React from 'react';
import CreatePost from '../containers/posts/CreatePost';
import AllPosts from '../containers/posts/AllPosts';
import styles from './Home.css';

export default function Home() {
  return (
    <>
      <h1 className={styles.headline}>A Blog of Miniature Proportions</h1>
      <section className={styles.CreatePost}>
        <h2>Craft your post</h2>
        <CreatePost />
      </section>
      <section>
        <AllPosts />
      </section>
    </>
  );
}
