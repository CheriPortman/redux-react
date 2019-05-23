import reducer from './postReducer';

import { createPost, deletePost } from '../actions/postActions';

describe('post reducer', () => {
  it('handles the CREATE_POST action', () => {
    const newState = reducer([], createPost('post title', 'post text'));

    expect(newState).toEqual([
      { title: 'post title', body: 'post text' }
    ]);
  });

  it('handles the DELETE_POST action', () => {
    const initialState = [
      { title: 'my post', body: 'text' },
      { title: 'my post2', body: 'text' },
      { title: 'my post3', body: 'text' }
    ];
    const newState = reducer(initialState, deletePost(1));

    expect(newState).toEqual([
      { title: 'my post', body: 'text' },
      { title: 'my post3', body: 'text' }
    ]);
  });
});
