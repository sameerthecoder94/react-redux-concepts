import { createStore } from 'redux';

function counterReducer(state = { counter: 1 }, action) {
  return state;
}

const store = createStore(counterReducer);

export default store;
