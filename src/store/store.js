import { createStore } from 'redux';

function counterReducer(state = { counter: 0 }, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { counter: state.counter + 1 };
    case 'DECREMENT':
      return { counter: state.counter - 1 };
    default:
      return state;
  }
}

const store = createStore(counterReducer);

export default store;
