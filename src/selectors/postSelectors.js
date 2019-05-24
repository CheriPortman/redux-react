//id is index (map's second param is index)
export const getPosts = state => state.posts.map((post, id) => ({
  ...post,
  id
}));

export const getPost = (state, id) => getPosts(state)[id];
