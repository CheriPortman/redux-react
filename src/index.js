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
    case 'ADD-SANDWICH':
      return { ...state, sandwich: action.payload };
    case 'ADD-FRUIT':
      return { ...state, fruit: action.payload };
    case 'ADD-DESSERT':
      return { ...state, dessert: action.payload };
    default: 
      return state;
  }
}

const store = createStore(reducer);

//here we dispatch things to be added to the store
