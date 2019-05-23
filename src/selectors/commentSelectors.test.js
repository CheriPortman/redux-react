import { getComments } from './commentSelectors';

describe('comment selectors', () => {
  it('gets all comments by the postId', () => {
    const state = {
      comments: {
        42: ['coolio', 'wrapitup']
      }
    };
    expect(getComments(state, 42)).toEqual(['coolio', 'wrapitup']);
  });
});
