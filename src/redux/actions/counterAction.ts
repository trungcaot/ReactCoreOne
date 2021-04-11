import * as types from "./actionTypes";

const increment = () => {
  return {
    type: types.INCREMENT
  };
};

const decrement = () => {
  return {
    type: types.DECREMENT
  };
};

export default {
  increment,
  decrement
};
