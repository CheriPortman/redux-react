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
    case 'REMOVE_DRINK':
      return { ...state, drink: null };
    case 'ADD_SANDWICH':
      return { ...state, sandwich: action.payload };
    case 'REMOVE_SANDWICH':
      return { ...state, sandwich: null };
    case 'ADD_FRUIT':
      return { ...state, fruit: action.payload };
    case 'REMOVE_FRUIT':
      return { ...state, fruit: null };
    case 'ADD_DESSERT':
      return { ...state, dessert: action.payload };
    case 'REMOVE_DESSERT':
      return { ...state, dessert: null };
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

store.dispatch({
  type: 'ADD_SANDWICH',
  payload: 'liverwurst'
});
console.log('sandwich', store.getState());

store.dispatch({
  type: 'ADD_FRUIT',
  payload: 'apple'
});
console.log('fruit', store.getState());

store.dispatch({
  type: 'ADD_DESSERT',
  payload: 'cookies'
});
console.log('dessert', store.getState());

store.dispatch({
  type: 'REMOVE_DRINK'
});
console.log('removed drink', store.getState());

store.dispatch({
  type: 'REMOVE_SANDWICH'
});
console.log('sandwith removed', store.getState());

store.dispatch({
  type: 'REMOVE_FRUIT'
});
console.log('fruit removed', store.getState());

store.dispatch({
  type: 'REMOVE_DESSERT'
});
console.log('fruit removed', store.getState());

