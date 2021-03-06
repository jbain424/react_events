import React, { Component } from 'react';
import Determination from "./determination.js"
import Times from "./times.js"
import NewHabit from "./newhabit.js"

class Counter extends Component {

  constructor() {
    super();
    this.state = {
      count: 0,
      rate: 1,
      time: 1,
      amount: 1
    };

    this.handleClick = this.handleClick.bind(this);

    this.handleDetermination = this.handleDetermination.bind(this);

    this.handleTime = this.handleTime.bind(this);

    this.handleNewHabit = this.handleNewHabit.bind(this);
  }

  handleClick() {
    let { count, rate, time, amount } = this.state;
    this.setState({
      count: this.state.count + rate,
    })
  }

  handleDetermination() {
      if (this.state.count >= 10) {
        this.setState({
          count: this.state.count - 10,
          rate: this.state.rate + 1,
          amount: this.state.amount + 1
        })
      }
  }

  handleTime() {
    if(this.state.count >= 100) {
      this.setState({
        count: this.state.count - 100,
        rate: this.state.rate + 10,
        time: this.state.time + 1
      })
    }
  }

  handleNewHabit() {
    if(this.state.count / 2) {
      this.setState({
        count: this.state.count / 2,
        rate: this.state.rate + Math.floor(0.1),
        amount: this.state.amount + 1
      })
    }
  }

  render() {
    const { count, rate, time, amount } = this.state;
    return (
      <div>
        <p>Knowledge points: {count}</p>
        <button onClick={this.handleClick}>click + {rate}</button>

        <Determination handleDetermination={this.handleDetermination}  amount={this.state.amount} />

        <Times handleTime={this.handleTime} time={this.state.time} />

        <NewHabit handleNewHabit={this.handleNewHabit}  amount={this.state.amount} />
      </div>
    );
  }
}
export default Counter;
