//create action to create a comment for a post (by post index)

export const CREATE_COMMENT = 'CREATE_COMMENT';
export const createComment = (postId, comment) => ({
  type: CREATE_COMMENT,
  payload: { postId, comment }
});

//create an action to delete a comment for a post (by post index and comment)
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const deleteComment = (postId, commentIndex) => ({
  type: DELETE_COMMENT,
  payload: { postId, commentIndex }
});
