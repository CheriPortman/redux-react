import { createStore } from 'redux';

const initialState = {
  drink: null,
  sandwich: null,
  fruit: null,
  dessert: null
};

function reducer(state = initialState, action) {
  //here goes stuff
}

const store = createStore(reducer);

//here we dispatch things to be added to the store
