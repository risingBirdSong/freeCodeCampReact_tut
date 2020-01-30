import React from "react";

interface IncDecCompI {
  count: number;
}

class IncDecComp extends React.Component<{}, IncDecCompI> {
  constructor() {
    super({});
    this.state = {
      count: 0
    };
  }

  inc = () => {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      };
    });
  };

  dec = () => {
    this.setState(previous => {
      return {
        count: previous.count - 1
      };
    });
  };

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <h1>{this.state.count}</h1>
        <button onClick={this.inc}>inc</button>
        <button onClick={this.dec}>dec</button>
      </div>
    );
  }
}

export { IncDecComp };
