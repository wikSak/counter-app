import React, { Component } from "react";

class Counter extends React.Component {

  //   renderTags() {
  //
  //     if (this.state.tags.length === 0) return <p>Empty array!</p>;

  //     return (
  //       <ul>
  //         {this.state.tags.map((tag) => (
  //           <li key={tag}>{tag}</li>
  //         ))}
  //       </ul>
  //     );
  //   }
  //  constructor() {
  //      super();
  //      this.handleIncrement = this.handleIncrement.bind(this);
  //  }

  render() {
    return (
      <div>
        <span className={this.getBagdeClasses()}>{this.props.counter.value}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>

        {/* {this.state.tags.length === 0 && "It is empty. Create!"} */}
        {/* {this.renderTags()} */}
      </div>
    );
  }
  getBagdeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
