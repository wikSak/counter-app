import React, { Component } from "react";

class Counter extends React.Component {
  state = {
    count: 1,
    tags: [],
  };
  renderTags() {
    if (this.state.tags.length === 0) return <p>Empty array!</p>;

    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
//  constructor() {
//      super();
//      this.handleIncrement = this.handleIncrement.bind(this);
//  }
  handleIncrement = () => {
  this.setState({count: this.state.count + 1})
  }

  render() {
    return (
      <div>
          <span>{this.state.count}</span>
        <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">
          Increment
        </button>
        <span></span>
        {/* {this.state.tags.length === 0 && "It is empty. Create!"} */}
        {this.renderTags()}
      </div>
    );
  }
}

export default Counter;
