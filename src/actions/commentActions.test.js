import { createComment, CREATE_COMMENT, deleteComment, DELETE_COMMENT } from './commentActions';

describe('Comment actions', () => {
  it('can create a comment', () => {
    expect(createComment(123, 'a comment')).toEqual({
      type: CREATE_COMMENT,
      payload: { postId: 123, comment: 'a comment' }
    });
  });

  it('can delete a comment', () => {
    expect(deleteComment(123, 0)).toEqual({
      type: DELETE_COMMENT,
      payload:  { postId: 123, commentIndex: 0 }
    });
  });
});
