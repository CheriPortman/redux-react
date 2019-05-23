import { createStore } from 'redux';
import { addDrink, removeDrink, 
  addSandwich, removeSandwich, 
  addFruit, removeFruit,
  addDessert, removeDessert } 
  from './actions/lunchActions';

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

store.dispatch(addDrink('water'));
console.log('add drink', store.getState());

store.dispatch(addSandwich('turkey'));
console.log('sandwich', store.getState());

store.dispatch(addFruit('apple'));
console.log('fruit', store.getState());

store.dispatch(addDessert('chocolate'));
console.log('dessert', store.getState());

store.dispatch(removeDrink());
console.log('removed drink', store.getState());

store.dispatch(removeSandwich());
console.log('sandwith removed', store.getState());

store.dispatch(removeFruit());
console.log('fruit removed', store.getState());

store.dispatch(removeDessert());
console.log('fruit removed', store.getState());

