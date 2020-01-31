import React from "react";
import { ChangeEvent } from "react";
import logo from "./logo.svg";
import "./App.css";
import { TodoComp } from "./components/todoComp";
import { todosData } from "./data/todos";
import { IncDecComp } from "./components/incDecComp";
import { todoI } from "./data/todos";
import { ConditionalRenderComp } from "./components/conditional";
import { Z_UNKNOWN } from "zlib";
import { stringify } from "querystring";

class App extends React.Component<any, any> {
  constructor() {
    super({});
    this.state = {
      userInput: ""
    };
  }

  handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      userInput: event.target.value
    });
  };

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="type here"
            onChange={this.handleInput}
          />
        </form>
        <p>{this.state.userInput}</p>
      </div>
    );
  }
}

export default App;
