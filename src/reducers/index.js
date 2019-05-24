import { combineReducers } from 'redux';
import posts from './postReducer';
import comment from './commentReducer';

export default combineReducers({
  posts,
  comment
});
