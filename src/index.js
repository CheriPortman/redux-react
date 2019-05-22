import { createStore } from 'redux';
// import { addDrink, removeDrink, 
//   addSandwich, removeSandwich, 
//   addFruit, removeFruit,
//   addDessert, removeDessert } 
//   from './actions/lunchActions';

const initialState = {
  title: null,
  body: null
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'ADD_POST':
      return { ...state, post: action.payload };
    case 'REMOVE_POST':
      return { ...state, post: null };
    
  }
}

const store = createStore(reducer);
