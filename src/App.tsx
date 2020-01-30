import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { TodoComp } from "./components/todoComp";
import { todos } from "./data/todos";
import { IncDecComp } from "./components/incDecComp";

class App extends React.Component {
  constructor() {
    super({});
  }
  render() {
    let todosMapped = todos.map((todo, idx) => {
      return <TodoComp done={todo.done} task={todo.task} />;
    });
    return (
      <div>
        {todosMapped};
        <IncDecComp />
      </div>
    );
  }
}

export default App;
