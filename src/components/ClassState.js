import { Button } from "bootstrap";
import React, { Component } from "react";

class ClassState extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  addOne = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };

  render() {
    return (
      <div className="mt-3">
        <p className="text-warning">
          <strong>Class state {this.state.counter}</strong>
        </p>
        <button className="btn btn-primary" onClick={this.addOne}>
          State dans Class
        </button>
      </div>
    );
  }
}

export default ClassState;
