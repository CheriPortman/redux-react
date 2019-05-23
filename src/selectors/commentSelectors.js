//get all comments by post
export const getComments = (state, postId) => state.comments[postId] || [];
