import React, { Component } from "react";

export default class Counter extends Component {


  render() {
    // console.log(this.props.counter);
    const { value } = this.props.counter;
    let classes = value === 0 ? "badge badge-warning" : "badge badge-primary";
    return (
      <div>
        <p className={classes}>{value === 0 ? "Zero" : value}</p>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-seconday btn-sm ml-2"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
}
