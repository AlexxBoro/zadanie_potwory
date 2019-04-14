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
    this.onMonsterNameSubmit("fooz");

    axios
      .get("http://localhost:8080/api/v1/monsters")
      .then(response => {
        // console.log(response.data.data);
        this.setState({ monsters: response.data.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  onMonsterNameSubmit(monsterName) {
    // console.log(monsterName);
    // tu musi byc znow zapytanie do tego api bo dopiero tutaj wiemy co wpisal user
    axios
      .get(`http://localhost:8080/api/v1/monster/${monsterName}`)
      .then(response => {
        // console.log(response.data.data);
        // console.log(response.data.data.statistics);
        // console.log(response.data.data.images);
        this.setState({
          selectedMonster: response.data.data,
          selectedMonsterStats: response.data.data.statistics,
          selectedMonsterImages: response.data.data.images
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
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
