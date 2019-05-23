import { getPosts, getPost } from './postSelectors';

describe('post selectors', () => {
  it('gets all posts', () => {
    const state = {
      posts: [
        { title: 'one', body: 'onetext' },
        { title: 'two', body: 'twotext' },
        { title: 'three', body: 'threetext' }
      ]
    };
    
    expect(getPosts(state)).toEqual([
      { id: 0, title: 'one', body: 'onetext' },
      { id: 1, title: 'two', body: 'twotext' },
      { id: 2, title: 'three', body: 'threetext' }
    ]);
  });
  
  it('gets a post by index', () => {
    const state = {
      posts: [
        { title: 'one', body: 'onetext' },
        { title: 'two', body: 'twotext' },
        { title: 'three', body: 'threetext' }
      ]
    };
    expect(getPost(state, 1)).toEqual({ id: 1, title: 'two', body: 'twotext' });
  });
});
