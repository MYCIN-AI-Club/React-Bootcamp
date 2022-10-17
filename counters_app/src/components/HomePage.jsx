import React, { Component } from "react";
import CounterHome from "./CounterHome";
import Navbar from "./Navbar";

class HomePage extends Component {
  state = {
    counters: [
      {
        id: 1,
        count: 3,
      },
      {
        id: 2,
        count: 2,
      },
      {
        id: 3,
        count: 0,
      },
      {
        id: 4,
        count: 1,
      },
    ],
  };

  //   creating functions
  handleIncrement = (id) => {
    const newCounters = this.state.counters;
    // update the newCounters array and set it to the state
    this.setState({
      counters: newCounters.map((counter) => {
        if (counter.id === id) counter.count++;
        return counter;
      }),
    });
  };

  handleDecrement = (id) => {
    // create a copy of the counters
    const newCounters = this.state.counters;

    // now update the requested element and set it to the state of the CounterHome
    this.setState({
      counters: newCounters.map((counter) => {
        if (counter.id === id && counter.count > 0) counter.count--;
        return counter;
      }),
    });
  };

  handleDelete = (id) => {
    const newCounters = this.state.counters;
    this.setState({
      counters: newCounters.filter((counter) => counter.id !== id),
    });
  };

  handleReset = (id) => {
    const newCounters = this.state.counters;
    this.setState({
      counters: newCounters.map((counter) => {
        if (counter.id === id) counter.count = 0;
        return counter;
      }),
    });
  };

  handleResetAll = () => {
    const newCounters = this.state.counters;
    this.setState({
      counters: newCounters.map((counter) => {
        counter.count = 0;
        return counter;
      }),
    });
  };

  render() {
    return (
      <div>
        <Navbar counters={this.state.counters} />
        <CounterHome
          counters={this.state.counters}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onReset={this.handleReset}
          onResetAll={this.handleResetAll}
        />
      </div>
    );
  }
}

export default HomePage;
