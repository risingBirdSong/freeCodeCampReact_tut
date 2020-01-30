import React from "react";

interface IncDecState {
  count: number;
}

class IncDecComp extends React.Component<{}, IncDecState> {
  constructor() {
    super({});
    this.state = {
      count: 0
    };
  }

  inc = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  dec = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    return (
      <div>
        <h1>counter!</h1>
        <h2>{this.state.count}</h2>
        <button onClick={this.inc}>inc</button>
        <button onClick={this.dec}>dec</button>
      </div>
    );
  }
}

export { IncDecComp };
