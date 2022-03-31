import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);
  console.log(show);

  const dispatch = useDispatch();

  const incrementCounter = () => {
    dispatch({ type: 'INCREMENT', payload: 10 });
  };

  const decrementCounter = () => {
    dispatch({ type: 'DECREMENT', payload: 5 });
  };

  const toggleCounter = () => {
    dispatch({ type: 'TOGGLE' });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <button onClick={incrementCounter}>incrementCounter</button>
      <button onClick={decrementCounter}>decrementCounter</button>
      <button onClick={toggleCounter} className={classes.button}>
        Toggle
      </button>
    </main>
  );
};

export default Counter;
