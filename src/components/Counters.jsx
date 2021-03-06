import React, { Component } from "react";
import Counter from "./Counter";

export default class Counters extends Component {
  
  render() {

    console.log('Counters-Render');

    const {onReset,onDelete,onIncrement,counters} =this.props
    return (

      <div className="container">
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">Reset</button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            counter = {counter}
            onDelete={onDelete}
            onIncrement={onIncrement}
          />
        ))}
      </div>
    );
  }
}
