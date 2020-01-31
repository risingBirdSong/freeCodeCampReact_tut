import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { TodoComp } from "./components/todoComp";
import { todosData } from "./data/todos";
import { IncDecComp } from "./components/incDecComp";
import { todoI } from "./data/todos";
import { ConditionalRenderComp } from "./components/conditional";

interface AppStateI {
  loggedIn: boolean;
  username: string;
}

class App extends React.Component<{}, AppStateI> {
  constructor() {
    super({});
    this.state = {
      loggedIn: false,
      username: "Johnny"
    };
  }

  inAndOut = () => {
    this.setState(prevState => {
      return {
        loggedIn: !prevState.loggedIn
      };
    });
  };

  render() {
    let passedObj = {
      changeLogStatus: this.inAndOut,
      ...this.state
    };
    return <ConditionalRenderComp props={passedObj} />;
  }
}

export default App;
