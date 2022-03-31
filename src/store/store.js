import { createStore } from 'redux';

const counterInitialState = {
  counter: 0,
  showCounter: true,
};

function counterReducer(state = counterInitialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, counter: state.counter + action.payload };
    case 'DECREMENT':
      return { ...state, counter: state.counter - action.payload };
    case 'TOGGLE':
      return { ...state, showCounter: !state.showCounter };
    default:
      return state;
  }
}

const store = createStore(counterReducer);

export default store;
