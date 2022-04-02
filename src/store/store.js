import { createSlice, configureStore } from '@reduxjs/toolkit';

const counterInitialState = {
  counter: 0,
  showCounter: true,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState: counterInitialState,
  reducers: {
    increment(state, action) {
      state.counter += action.payload;
    },
    decrement(state, action) {
      state.counter -= action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const store = configureStore({ reducer: counterSlice.reducer });

export const counterActions = counterSlice.actions;

export default store;

// import { createStore } from 'redux';

// const counterInitialState = {
//   counter: 0,
//   showCounter: true,
// };

// function counterReducer(state = counterInitialState, action) {
//   switch (action.type) {
//     case 'INCREMENT':
//       return { ...state, counter: state.counter + action.payload };
//     case 'DECREMENT':
//       return { ...state, counter: state.counter - action.payload };
//     case 'TOGGLE':
//       return { ...state, showCounter: !state.showCounter };
//     default:
//       return state;
//   }
// }

// const store = createStore(counterReducer);

// export default store;
