import React, { Component } from 'react';
import './Counter.css'

class Counter extends Component {
  state = {
    number: this.props.startsAt || 0
  }

  upClick = () => {
    this.setState({ number: this.state.number + 1 });
  }

  downClick = () => {
    if (this.state.number !== 0) {
      this.setState({ number: this.state.number - 1 });
    }
  }

  render() {
    return (
      <div className="counter">
        <button onClick={this.downClick}>
          -
        </button>
        <span className="count"> {this.state.number} </span>
        <button onClick={this.upClick}>
          +
        </button>
      </div>
    );
  }
}

export default Counter;
