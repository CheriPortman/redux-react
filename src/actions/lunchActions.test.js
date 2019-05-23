import { addDrink, ADD_DRINK, removeDrink, REMOVE_DRINK, 
  addSandwich, ADD_SANDWICH, removeSandwich, REMOVE_SANDWICH,
  addFruit, ADD_FRUIT, removeFruit, REMOVE_FRUIT, 
  addDessert, ADD_DESSERT, removeDessert, REMOVE_DESSERT } from './lunchActions';

describe('lunch actions', () => {
  it('adds a drink', () => {
    expect(addDrink('water')).toEqual({
      type: ADD_DRINK,
      payload: 'water'
    });
  });

  it('removes a drink', () => {
    expect(removeDrink()).toEqual({
      type: REMOVE_DRINK
    });
  });

  it('adds a sandwich', () => {
    expect(addSandwich('ham')).toEqual({
      type: ADD_SANDWICH,
      payload: 'ham'
    });
  });

  it('removes a sandwich', () => {
    expect(removeSandwich()).toEqual({
      type: REMOVE_SANDWICH
    });
  });

  it('adds a fruit', () => {
    expect(addFruit('apple')).toEqual({
      type: ADD_FRUIT,
      payload: 'apple'
    });
  });

  it('removes a fruit', () => {
    expect(removeFruit()).toEqual({
      type: REMOVE_FRUIT
    });
  });

  it('adds a dessert', () => {
    expect(addDessert('gin')).toEqual({
      type: ADD_DESSERT,
      payload: 'gin'
    });
  });

  it('removes a dessert', () => {
    expect(removeDessert()).toEqual({
      type: REMOVE_DESSERT
    });
  });
});
