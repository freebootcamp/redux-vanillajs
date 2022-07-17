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
