import * as types from "../actions/actionTypes";

const initialState = {
  value: 0
};


export default function counterReducer(state = initialState, action: any) {
  switch (action.type) {
    case types.INCREMENT:
      return {
        ...state,
        value: state.value + 1
      }
    case types.DECREMENT:
      return {
        ...state,
        value: state.value - 1
      }
    default:
      return { ...state };
  }
}
