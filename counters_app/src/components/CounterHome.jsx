import React, { Component } from "react";
import Counter from "./Counter";

class CounterHome extends Component {
  render() {
    return (
      <div className="text-center p-5">
        <div>
          {this.props.counters.map((counter) => (
            <Counter
              key={counter.id}
              counter={counter}
              onIncrement={this.props.onIncrement}
              onDecrement={this.props.onDecrement}
              onReset={this.props.onReset}
              onDelete={this.props.onDelete}
            />
          ))}
        </div>
        <button
          onClick={this.props.onResetAll}
          className="btn btn-success mx-4 my-4"
        >
          Reset All
        </button>
      </div>
    );
  }
}

export default CounterHome;
