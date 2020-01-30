import React from "react";
import { todosData } from "../data/todos";

interface propsI {
  id: number;
  done: boolean;
  task: string;
  handleChange: (id: number) => void;
}

class TodoComp extends React.Component<propsI, { done: boolean }> {
  constructor({ props }: { props: propsI }) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>{this.props.task}</h3>
        <input
          type="checkbox"
          checked={this.props.done}
          onClick={() => {
            this.props.handleChange(this.props.id);
          }}
        />
      </div>
    );
  }
}

export { TodoComp };
