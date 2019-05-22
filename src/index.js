import { createStore } from 'redux';

const initialState = {
  drink: null,
  sandwich: null,
  fruit: null,
  dessert: null
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'ADD_DRINK':
      return { ...state, drink: action.payload };
    case 'ADD_SANDWICH':
      return { ...state, sandwich: action.payload };
    case 'ADD_FRUIT':
      return { ...state, fruit: action.payload };
    case 'ADD_DESSERT':
      return { ...state, dessert: action.payload };
    default: 
      return state;
  }
}

const store = createStore(reducer);

store.dispatch({
  type: 'ADD_DRINK',
  payload: 'Bubbly'
});

console.log('add drink', store.getState());


