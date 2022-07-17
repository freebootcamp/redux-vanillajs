import * as actionTypes from "./actionTypes";

export default function reducer(state = { output: 0 }, action) {
  switch (action.type) {
    case actionTypes.ADD:
      return {
        output:
          parseInt(action.payload.number1) + parseInt(action.payload.number2),
      };

    case actionTypes.SUBTRACT:
      return {
        output:
          parseInt(action.payload.number1) - parseInt(action.payload.number2),
      };

    case actionTypes.MULTIPLY:
      return {
        output:
          parseInt(action.payload.number1) * parseInt(action.payload.number2),
      };

    case actionTypes.DIVIDE:
      return {
        output:
          parseInt(action.payload.number1) / parseInt(action.payload.number2),
      };

    case actionTypes.ADD_WITH_RANDOM_SUCCESS:
      return {
        output: action.payload.output,
      };

    case actionTypes.ADD_WITH_RANDOM_FAILURE:
      return {
        error: action.payload.error,
      };

    default:
      return state;
  }
}
