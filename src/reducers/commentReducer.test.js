import reducer from './commentReducer';

import { createComment, deleteComment } from '../actions/commentActions';
import { deletePost } from '../actions/postActions';

describe('comment reducer', () => {
  it('handles the CREATE_COMMENT action', () => {
    const newState = reducer({}, createComment(1, 'text1'));

    expect(newState).toEqual({
      1: ['text1']
    });
  });

  it('handles CREATE_COMMENT action with existing comments', () => {
    const initialState = {
      1: ['comment']
    };
    const newState = reducer(initialState, createComment(1, 'Is Good'));

    expect(newState).toEqual({
      1: ['comment', 'Is Good']
    });
  });
  
  it('handles the DELETE_COMMENT action', () => {
    const initialState = {
      1: ['comment', 'Is Good']
    };
    const newState = reducer(initialState, deleteComment(1, 0));

    expect(newState).toEqual({
      1: ['Is Good']
    });
  });
});
