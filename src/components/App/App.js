import React from "react";
import axios from "axios";
import SearchBar from "../SearchBar/SearchBar";
import ChosenMonster from "../ChosenMonster/ChosenMonster";
import MonstersList from "../MonstersList/MonstersList";
import "./App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
      selectedMonster: [],
      selectedMonsterStats: [],
      selectedMonsterImages: []
    };
    this.onMonsterNameSubmit = this.onMonsterNameSubmit.bind(this);
  }

  componentDidMount() {
    console.log("wykonuje sie component did mount w APP, w nim zapytanie do api o kolekcje potworow")
    this.onMonsterNameSubmit("fooz");
    axios
      .get("http://localhost:8080/api/v1/monsters")
      .then(response => {
        this.setState({ monsters: response.data.data });
      })
      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        console.log(error.config);
      });
  }

  onMonsterNameSubmit(monsterName) {
    console.log("funkcja on monster sumbmit, drugie zapytanie o konkretnego potwora")
    axios
      .get(`http://localhost:8080/api/v1/monster/${monsterName}`)
      .then(response => {
        this.setState({
          selectedMonster: response.data.data,
          selectedMonsterStats: response.data.data.statistics,
          selectedMonsterImages: response.data.data.images
        });
      })
      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          alert("incorrect name of a monster!");
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        console.log(error.config);
      });
  }

  render() {
    console.log("render komponentu APP");
    return (
      <div className="app-container">
        <header>
          <h1 className="app-container__title">Monsters</h1>
        </header>
        <main>
          <SearchBar onMonsterNameSubmit={this.onMonsterNameSubmit} />
          <ChosenMonster
            selectedMonster={this.state.selectedMonster}
            selectedMonsterStats={this.state.selectedMonsterStats}
            selectedMonsterImages={this.state.selectedMonsterImages}
          />
          <MonstersList allmonsters={this.state.monsters} />
        </main>
      </div>
    );
  }
}

export default App;
