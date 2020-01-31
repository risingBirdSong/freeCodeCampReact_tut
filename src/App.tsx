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

enum resourceEnum {
  "films" = "films",
  "people" = "people",
  "planets" = "planets",
  "species" = "species",
  "starships" = "starships",
  "vehicles" = "vehicles"
}
interface characterI {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: Date;
  edited: Date;
  url: string;
}

interface filmsI {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  created: Date;
  edited: Date;
  url: string;
}
interface planetsI {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  created: Date;
  edited: Date;
  url: string;
}

interface speciesI {
  name: string;
  classification: string;
  designation: string;
  average_height: string;
  skin_colors: string;
  hair_colors: string;
  eye_colors: string;
  average_lifespan: string;
  homeworld: string;
  language: string;
  people: string[];
  films: string[];
  created: Date;
  edited: Date;
  url: string;
}

interface starshipsI {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  hyperdrive_rating: string;
  MGLT: string;
  starship_class: string;
  pilots: any[];
  films: string[];
  created: Date;
  edited: Date;
  url: string;
}

interface vehiclesI {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  vehicle_class: string;
  pilots: any[];
  films: string[];
  created: Date;
  edited: Date;
  url: string;
}

type APIoptions =
  | characterI
  | filmsI
  | planetsI
  | speciesI
  | starshipsI
  | vehiclesI
  | undefined
  | string;

interface AppStateI {
  resource: resourceEnum;
  item: number;
  result: APIoptions;
  single: string;
  experiment: any[];
}

class App extends React.Component<{}, AppStateI> {
  constructor() {
    super({});
    this.state = {
      resource: resourceEnum.people,
      item: 1,
      result: undefined,
      single: "default",
      experiment: []
    };
  }
  componentDidMount() {
    let result: APIoptions = undefined;
    fetch(`https://swapi.co/api/${this.state.resource}/${this.state.item}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        switch (this.state.resource) {
          case resourceEnum.people:
            result = data as characterI;
            this.setState({
              experiment: [result]
            });
            break;
          case resourceEnum.films:
            result = data as filmsI;
            break;
          case resourceEnum.planets:
            result = data as planetsI;
            break;
          case resourceEnum.species:
            result = data as speciesI;
            break;
          case resourceEnum.starships:
            result = data as starshipsI;
            break;
          case resourceEnum.vehicles:
            result = data as vehiclesI;
            break;
        }
      });
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

  transformForDisplay = (holderArr: any[]) => {};

  render() {
    let moreExperiment = { ...this.state.experiment[0] } as characterI;
    let arrayFOrObjKeyVal = Object.entries(moreExperiment);

    let mapped = arrayFOrObjKeyVal.map(item => {
      return this.singleReturn(item);
    });

    return <div>{mapped}</div>;
  }
}

export default App;
