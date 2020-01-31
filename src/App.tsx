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

interface AppState {
  firstName: string;
  lastName: string;
}

interface nameOptions {
  firstName: string;
  lastName: string;
}

class App extends React.Component<any, AppState> {
  constructor() {
    super({});
    this.state = {
      firstName: "",
      lastName: ""
    };
  }

  handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    console.log("name ->", event.target.name);
    let { name, value } = event.target;
    //@ts-ignore
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div>
        <form>
          <input
            value={this.state.firstName}
            type="text"
            name="firstName"
            placeholder="type first name here"
            onChange={this.handleInput}
          />
          <hr />
          <input
            value={this.state.lastName}
            type="text"
            placeholder="type last name here"
            name="lastName"
            onChange={this.handleInput}
          />
        </form>
        <p>first ->{this.state.firstName}</p>
        <p>last ->{this.state.lastName}</p>
      </div>
    );
  }
}

export default App;
