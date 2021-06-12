import React, { Component } from "react";
import Counter from "./Counter";

export default class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 4 },
      { id: 3, value: 0 },
      { id: 4, value: 2 },
    ],
  };

  handleIncrement = counter => {
      // copy array 
      const counters = [...this.state.counters]
      // find index of array
      const index = counters.indexOf(counter)
      // copy object from counter parameter
      counters[index] = {...counter}
      // value ++
      counters[index].value ++
      this.setState({counters})
  }

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  handleReset =() =>{
      const counters = this.state.counters.map(c => {
          c.value = 0
          return c })
     this.setState({counters})
      
  }

  render() {
    return (
      <div className="container">
        <button onClick={this.handleReset} className="btn btn-primary btn-sm m-2">Reset</button>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            counter = {counter}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
          />
        ))}
      </div>
    );
  }
}
