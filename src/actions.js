import * as actionTypes from "./actionTypes";

export function addition(payload) {
  return {
    type: actionTypes.ADD,
    payload: payload,
  };
}

export function subtraction(payload) {
  return {
    type: actionTypes.SUBTRACT,
    payload: payload,
  };
}

export function multiplication(payload) {
  return {
    type: actionTypes.MULTIPLY,
    payload: payload,
  };
}

export function division(payload) {
  return {
    type: actionTypes.DIVIDE,
    payload: payload,
  };
}

export function additionWithRandomNumber(payload) {
  return {
    type: actionTypes.ADD_WITH_RANDOM,
    payload: payload,
  };
}

export function additionWithRandomNumberSuccess(payload) {
  return {
    type: actionTypes.ADD_WITH_RANDOM_SUCCESS,
    payload: payload,
  };
}

export function additionWithRandomNumberFailure(error) {
  return {
    type: actionTypes.ADD_WITH_RANDOM_FAILURE,
    payload: { error: error.toString() },
  };
}
