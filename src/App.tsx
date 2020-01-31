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
  hasSubmitted: boolean;
  firstName: string;
  lastName: string;
  age: number | string;
}

class App extends React.Component<any, AppState> {
  constructor() {
    super({});
    this.state = {
      hasSubmitted: false,
      firstName: "",
      lastName: "",
      age: 0
    };
  }

  handler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name } = event.target as any;
    const { value } = event.target;
    //@ts-ignore
    this.setState({
      [name]: value
    });
  };

  submitter = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(this.state);
    this.setState({
      hasSubmitted: true
    });
  };

  render() {
    let firstName, lastName, age;

    if (this.state.hasSubmitted === false) {
      firstName = "";
      lastName = "";
      age = "";
    } else {
      firstName = this.state.firstName;
      lastName = this.state.lastName;
      age = this.state.age;
    }

    return (
      <div>
        <div>
          <form onSubmit={this.submitter}>
            firstname{" "}
            <input type="text" name="firstName" onChange={this.handler} />
            <hr />
            lastname{" "}
            <input type="text" name="lastName" onChange={this.handler} />
            <hr />
            age <input type="text" name="age" onChange={this.handler} />
            <hr />
            <button>submit info</button>
          </form>
        </div>

        <div>
          <h1>info entered</h1>
          first name : <p>{firstName}</p>
          <hr />
          last name : <p>{lastName}</p>
          <hr />
          age : <p>{age}</p>
        </div>
      </div>
    );
  }
}

export default App;
