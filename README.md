This project is inspired from [this](https://programmingwithmosh.com/redux-starter/) code

# redux-vanillajs
Redux framework for JavaScript


To install NPM 

`npm install redux`

The example has four action types
1. ADD
2. SUBTRACT
3. MULTIPLY
4. DIVIDE

### `action`

An action is a plain object that represents an intention to change the state. 

### `type`
An action typically has a type which uniquely identifies the action. 

### `payload`
payload is an object representing the payload of the action. In case of an error, the payload should be an error object. 

```JavaScript
{
  type: 'ADD_TODO',
  payload: {
    text: 'Do something.'  
  }
}
```

The action objects are defined in actions.js

For example

```JavaScript
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
```

### `Reducer`

A reducer is a function that accepts an accumulation and a value that returns a new accumulation. They are used to reduce a collection of values down to a single value.  In redux, the accumulated value is the state object, and the values being accumulated are actions. Reducers calculate a new state given the previous state and an action. They must be pure functions - functions that return the exame same output for given inputs. They should also be free of side-effects. This is what enables exciting features like hot reloading and time travel. 

