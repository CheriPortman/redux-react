import reducer from './lunchReducer';

import { addDrink, removeDrink, addSandwich, removeSandwich,
  addFruit, removeFruit, addDessert, removeDessert } from '../actions/lunchActions';

describe ('lunch reducer', () => {
  it('handles the ADD_DRINK action', () => {
    const initialState = {
      drink: null
    };

    const updatedState = reducer(initialState, addDrink('water'));

    expect(updatedState).toEqual({
      drink: 'water'
    });
  });

  it('handles the REMOVE_DRINK action', () => {
    const initialState = {
      drink: 'water'
    };

    const updatedState = reducer(initialState, removeDrink());

    expect(updatedState).toEqual({
      drink: null
    });
  });

  it('handles the ADD_SANDWICH action', () => {
    const initialState = {
      sandwich: null
    };

    const updatedState = reducer(initialState, addSandwich('ham'));

    expect(updatedState).toEqual({
      sandwich: 'ham'
    });
  });

  it('handles the REMOVE_SANDWICH action', () => {
    const initialState = {
      sandwich: 'ham'
    };

    const updatedState = reducer(initialState, removeSandwich());

    expect(updatedState).toEqual({
      sandwich: null
    });
  });

  it('handles the ADD_FRUIT action', () => {
    const initialState = {
      fruit: null
    };

    const updatedState = reducer(initialState, addFruit('apple'));

    expect(updatedState).toEqual({
      fruit: 'apple'
    });
  });

  it('handles the REMOVE_FRUIT action', () => {
    const initialState = {
      fruit: 'apple'
    };

    const updatedState = reducer(initialState, removeFruit());

    expect(updatedState).toEqual({
      fruit: null
    });
  });

  it('handles the ADD_DESSERT action', () => {
    const initialState = {
      dessert: null
    };

    const updatedState = reducer(initialState, addDessert('candy'));

    expect(updatedState).toEqual({
      dessert: 'candy'
    });
  });

  it('handles the REMOVE_DESSERT action', () => {
    const initialState = {
      dessert: 'candy'
    };

    const updatedState = reducer(initialState, removeDessert());

    expect(updatedState).toEqual({
      dessert: null
    });
  });
});
