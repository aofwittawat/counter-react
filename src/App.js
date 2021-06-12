import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Counters from "./components/Counters.jsx";

export default class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 4 },
      { id: 3, value: 0 },
      { id: 4, value: 2 },
    ],
  };

  constructor() {
    super();

    console.log('App-Constructor');
  }
  componentDidMount(){
    //Ajax call
    console.log('App-mounted');
  }
  
  handleIncrement = (counter) => {
    // copy array
    const counters = [...this.state.counters];
    // find index of array
    const index = counters.indexOf(counter);
    // copy object from counter parameter
    counters[index] = { ...counter };
    // value ++
    counters[index].value++;
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  render() {
    console.log("App-render");
    return (
      <>
        <Navbar totalCounter={this.state.counters.filter(c=>c.value>0).length}/>
        <main className="container-fluid">
          <Counters
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            counters={this.state.counters}
          />
        </main>
      </>
    );
  }
}
