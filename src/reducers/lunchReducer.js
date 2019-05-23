import { ADD_DRINK, REMOVE_DRINK, ADD_SANDWICH, REMOVE_SANDWICH, 
  ADD_FRUIT, REMOVE_FRUIT, ADD_DESSERT, REMOVE_DESSERT } from '../actions/lunchActions';

const initialState = {
  drink: null,
  sandwich: null,
  fruit: null,
  dessert: null
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_DRINK:
      return { ...state, drink: action.payload };
    case REMOVE_DRINK:
      return { ...state, drink: null };
    case ADD_SANDWICH:
      return { ...state, sandwich: action.payload };
    case REMOVE_SANDWICH:
      return { ...state, sandwich: null };
    case ADD_FRUIT:
      return { ...state, fruit: action.payload };
    case REMOVE_FRUIT:
      return { ...state, fruit: null };
    case ADD_DESSERT:
      return { ...state, dessert: action.payload };
    case REMOVE_DESSERT:
      return { ...state, dessert: null };
    default: 
      return state;
  }
}
