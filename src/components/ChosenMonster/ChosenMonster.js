import React from "react";
import "./ChosenMonster.scss";

class ChosenMonster extends React.Component {
  render() {
    const chosenMonster = this.props.selectedMonster;
    const monsterStats = this.props.selectedMonsterStats;
    const monsterImages = this.props.selectedMonsterImages;

    return (
      <div className="chosen-monster">
        tutaj bedzie info o wybranym potworze! ChosenMonster Component
        <h1>{chosenMonster.name}</h1>
        <img src={monsterImages.big} alt={chosenMonster.name} />
        <p>{chosenMonster.description}</p>
        <h2>statistics:</h2>
        <span>power: </span>
        <span>{monsterStats.power}</span>
        <br />
        <span>danger: </span>
        <span>{monsterStats.danger}</span>
        <br />
        <span>frequency: </span>
        <span>{monsterStats.frequency}</span>
      </div>
    );
  }
}

export default ChosenMonster;
