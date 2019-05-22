export const ADD_DRINK = 'ADD_DRINK';
export const addDrink = drink => ({
  type: ADD_DRINK,
  payload: drink
});

export const REMOVE_DRINK = 'REMOVE_DRINK';
export const removeDrink = () => ({
  type: REMOVE_DRINK
});

export const ADD_SANDWICH = 'ADD_SANDWICH';
export const addSandwich = sandwich => ({
  type: ADD_SANDWICH,
  payload: sandwich
});

export const REMOVE_SANDWICH = 'REMOVE_SANDWICH';
export const removeSandwich = () => ({
  type: REMOVE_SANDWICH
});

export const ADD_FRUIT = 'ADD_FRUIT';
export const addFruit = (fruit) => ({
  type: ADD_FRUIT,
  payload: fruit
});

export const REMOVE_FRUIT = 'REMOVE_FRUIT';
export const removeFruit = () => ({
  type: REMOVE_FRUIT
});

export const ADD_DESSERT = 'ADD_DESSERT';
export const addDessert = (dessert) => ({
  type: ADD_DESSERT,
  payload: dessert
});

export const REMOVE_DESSERT = 'REMOVE_DESSERT';
export const removeDessert = () => ({
  type: REMOVE_DESSERT
});
