export const addPost = post => ({
  type: 'ADD_POST',
  payload: post
});

export const deletePost = () => ({
  type: 'REMOVE_POST'
});
