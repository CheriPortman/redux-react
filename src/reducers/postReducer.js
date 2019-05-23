import { CREATE_POST, DELETE_POST } from '../actions/postActions';

const initialState = [];

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_POST:
      return [...state, action.payload];
    case DELETE_POST:
      return [
        //take everything beofre the deleted post
        ...state.slice(0, action.payload),
        //take everything after the deleted post
        ...state.slice(action.payload + 1)
      ];
    default: 
      return state;
  }
}
