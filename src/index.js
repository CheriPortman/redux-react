import { combineReducers } from 'redux';
import post from './reducers/postReducer';
import comment from './reducers/commentReducer';

export default combineReducers({
  post,
  comment
});
