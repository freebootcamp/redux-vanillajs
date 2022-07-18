import * as actionTypes from "./actionTypes";
import {
  additionWithRandomNumberSuccess,
  additionWithRandomNumberFailure,
} from "./actions";
import { call, takeEvery, put, all } from "redux-saga/effects";
import axios from "axios";

function* addWithRandom(action) {
  console.log(`Inside addWithRandom ${JSON.stringify(action)}`);
  try {
    const response = yield call(callApiRandomNumber);
    console.log(`response.data : ${JSON.stringify(response.data, null, 2)}`);
    yield put(
      additionWithRandomNumberSuccess({
        output:
          parseInt(response.data[0]) +
          parseInt(action.payload.number1) +
          parseInt(action.payload.number2),
      })
    );
  } catch (e) {
    yield put(additionWithRandomNumberFailure(e.toString()));
  }
}

function* callApiRandomNumber() {
  console.log(`Inside callApiRandomNumber`);

  return yield axios.get(
    "http://www.randomnumberapi.com/api/v1.0/randomnumber",
    {
      "Content-Type": "application/json",
    }
  );
}

function* rootSaga() {
  console.log(`inside rootSaga`);
  yield all([takeEvery(actionTypes.ADD_WITH_RANDOM, addWithRandom)]);
}

export default rootSaga;
