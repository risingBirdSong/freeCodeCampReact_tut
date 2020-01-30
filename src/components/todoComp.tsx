import React from "react";
import { todoI, todos } from "../data/todos";

class TodoComp extends React.Component<todoI, todoI> {
  constructor({ props }: { props: todoI }) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>{this.props.task}</h3>
        <input
          onChange={() => console.log(`${this.props.task} was clicked`)}
          type="checkbox"
          checked={this.props.done}
        />
      </div>
    );
  }
}

export { TodoComp };
