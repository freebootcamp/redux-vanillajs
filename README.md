This project is inspired from [a sample hosted on Mosh Hamedani's website](https://programmingwithmosh.com/redux-starter/)

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

#### `type`
An action typically has a type which uniquely identifies the action. 

#### `payload`
payload is an object representing the payload of the action. In case of an error, the payload should be an error object. 

```JavaScript
{
  type: 'ADD_TODO',
  payload: {
    text: 'Do something.'  
  }
}
```

#### Example action
```JavaScript
{
    type: actionTypes.ADD,
    payload: payload,
}

{
    type: actionTypes.SUBTRACT,
    payload: payload,
}
```

### Action Creator
An action creator is a function that creates an action. 

#### `Example action creator` 
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

_Do not put API calls into reducers._ 

#### `Example reducer`
```JavaScript
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

    default:
      return state;
  }
}
```

### Dispatch function 
A dispatch function is a function that accepts an action or an async action; it then may or may not dipatch one or more actions to the store. Middleware wraps the base dispatch function. It allows the dispatch function to handle async actions in addition to actions. Middleware wraps the base dispatch function. It allows the dispatch function to handle async actions in addition to actions. Middleware may transform, delay, ignore, or otherwise interpret actions or async actions before passing them to the next middleware.  


### Middleware
A middleware is a higher order function that composes a dispatch function to return a new dispatch function. It often turns async actions into actions. Middlware is composable using function composition. It is useful for logging actions, performing side effects like routing, or turning an asynchronous API call into a series of synchronous actions. 

#### applyMiddleware(...middleware)
The most common use case for middleware is to support asynchronous actions without much boilerplate code or a dependency on a library like Rx. It does so by letting you dispatch async actions in addition to normal actions. Each middleware receives store's dispatch and getState functions as named arguments and returns a function. That function will be given to the next middleware's dispatch method, and is expected to return a function of action calling next(action) with a potentially different argument, or at a different time, or maybe not calling it at all. 

Below is an example using a custom logger. 

```JavaScript 
function logger({ getState }) {
  return next => action => {
    console.log('will dispatch', action)

    // Call the next dispatch method in the middleware chain.
    const returnValue = next(action)

    console.log('state after dispatch', getState())

    // This will likely be the action itself, unless
    // a middleware further in chain changed it.
    return returnValue
  }
}

const store = createStore(todos, ['Use Redux'], applyMiddleware(logger))
```

### Using redux sagas Middleware for Async Actions

```JavaScript
import { createStore, combineReducers, applyMiddleware } from 'redux'

import * as reducers from './reducers'

const reducer = combineReducers(reducers)
```


