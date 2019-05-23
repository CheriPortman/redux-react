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
});
