//import { Component } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import {counterAction} from '../store/counter-slice';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();

  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector(state => state.counter.showCounter);

  const incrementCounterHandler = () => {
    dispatch(counterAction.increment());
  };

  const increseCounterHandler = () => {
    dispatch(counterAction.increse(5))
  };

  const decrementCounterHandler = () => {
    dispatch(counterAction.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterAction.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementCounterHandler}>Increment</button>
        <button onClick={increseCounterHandler}>Increse by 5</button>
        <button onClick={decrementCounterHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// class Counter extends Component{
//   incrementCounterHandler(){
//     this.props.increment();
//   };

//   decrementCounterHandler(){
//     this.props.decrement();
//   };

//   toggleCounterHandler(){};

//   render(){
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementCounterHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementCounterHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler.bind(this)}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return{
//     counter: state.counter
//   };
// }

// const mapDispatchToProps = (dispatch) => {
//   return{
//     increment : () => dispatch({type: 'increment'}),
//     decrement: () => dispatch({type: 'decrement'})
//   };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);