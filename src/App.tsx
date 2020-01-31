import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { TodoComp } from "./components/todoComp";
import { todosData } from "./data/todos";
import { IncDecComp } from "./components/incDecComp";
import { todoI } from "./data/todos";
import { ConditionalRenderComp } from "./components/conditional";
import { Z_UNKNOWN } from "zlib";
import { stringify } from "querystring";

interface AppStateI {
  item: number;
  single: string;
  experiment: any[];
}

class App extends React.Component<{}, AppStateI> {
  constructor() {
    super({});
    this.state = {
      item: 1,
      single: "default",
      experiment: []
    };
  }

  singleReturn = (contensArr: any[]) => {
    return (
      <div>
        <hr />
        <h3>{contensArr[0]}</h3>
        <p>{contensArr[1]}</p>
        <hr />
      </div>
    );
  };

  componentDidMount() {
    let search = "people";
    let num = 1;
    fetch(`https://swapi.co/api/${search}/${num}`)
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
        this.setState({
          experiment: data
        });
      })
      .then(() => {
        console.log(this.state.experiment);
      });
  }

  transformForDisplay = (holderArr: any[]) => {};

  render() {
    let moreExperiment = { ...this.state.experiment };
    let arrayFOrObjKeyVal = Object.entries(moreExperiment);

    let mapped = arrayFOrObjKeyVal.map(item => {
      return this.singleReturn(item);
    });

    return <div>{mapped}</div>;
  }
}

export default App;
