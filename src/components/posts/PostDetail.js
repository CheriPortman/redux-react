import React from 'react';
import PropTypes from 'prop-types';
import CommentsByPostId from '../../containers/comments/CommentsByPostId';
import CreateComment from '../../containers/comments/CreateComment';

function PostDetail({ post }) {
  const paras = post.body.split('\n').map((p, i) => (
    <p key={i}>{p}</p>
  ));

  const sectionStyle = { textAlign: 'center', fontSize: '24px' };  

  return (
    <section style={sectionStyle}>
      <h1>{post.title}</h1>
      {paras}
      <CommentsByPostId postId={post.id} />
      <CreateComment postId={post.id} />
    </section>
  );
}

PostDetail.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.shape.isRequired
  }).isRequired
};

export default PostDetail;
