import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const counterObj = useSelector((state) => state);
  console.log(counterObj);

  const dispatch = useDispatch();

  const incrementCounter = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const decrementCounter = () => {
    dispatch({ type: 'DECREMENT' });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counterObj.counter}</div>
      <button onClick={incrementCounter}>incrementCounter</button>
      <button onClick={decrementCounter}>decrementCounter</button>
    </main>
  );
};

export default Counter;
