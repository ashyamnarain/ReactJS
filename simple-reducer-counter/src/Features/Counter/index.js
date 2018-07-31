import React, { Component } from 'react';
import counterReducer from './counter.reducers';

export class Counter extends Component {
  state = counterReducer(undefined, {});
  
  dispatch(action) {
    this.setState(prevState => counterReducer(prevState, action));
  }

  increment = () => {
    this.dispatch({ type: 'INCREMENT' });
  };

  decrement = () => {
    this.dispatch({ type: 'DECREMENT' });
  };
  
  render() {
    return (
      <div>
        {this.state.value}
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    )
  }
}

export default Counter;