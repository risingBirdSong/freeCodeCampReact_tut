import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { TodoComp } from "./components/todoComp";
import { todosData } from "./data/todos";
import { IncDecComp } from "./components/incDecComp";
import { todoI } from "./data/todos";

interface AppState {
  todos: todoI[];
}

class App extends React.Component<{}, AppState> {
  constructor() {
    super({});
    this.state = {
      todos: todosData
    };
  }

  handleChange = (id: number) => {
    this.setState(prevstate => {
      const updatedTodos = prevstate.todos.map((todo, idx) => {
        if (todo.id === id) {
          todo.done = !todo.done;
        }
        return todo;
      });
      return {
        todos: updatedTodos
      };
    });
  };

  render() {
    let todosMapped = this.state.todos.map((todo, idx) => {
      return (
        <TodoComp
          done={todo.done}
          task={todo.task}
          id={todo.id}
          handleChange={this.handleChange}
        />
      );
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
