import { createPost, CREATE_POST, deletePost, DELETE_POST } from './postActions';

describe('Post actions', () => {
  it('can create a post', () => {
    expect(createPost('post title', 'post text')).toEqual({
      type: CREATE_POST,
      payload: { title: 'post title', body: 'post text' }
    });
  });

  it('can delete a post', () => {
    expect(deletePost(0)).toEqual({
      type: DELETE_POST,
      payload: 0
    });
  });

});
