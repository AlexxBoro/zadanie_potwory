import React from "react";
import "./ChosenMonster.scss";

class ChosenMonster extends React.Component {
  render() {
    console.log("render komponentu chosen monster")
    if (this.props.selectedMonster.length !== 0) {
      const chosenMonster = this.props.selectedMonster;
      const monsterStats = this.props.selectedMonsterStats;
      const monsterImages = this.props.selectedMonsterImages;

      return (
        <div className="chosen-monster">
          <p className="chosen-monster__title">{chosenMonster.name}</p>

          <div className="chosen-monster__container">
            <img
              className="chosen-monster__container__img"
              src={monsterImages.big}
              alt={chosenMonster.name}
            />
            <div className="chosen-monster__container__info">
              <p className="chosen-monster__container__info__descr">
                {chosenMonster.description}
              </p>

              <p>power: </p>
              <div className="chosen-monster__container__info__stat-container">
                <div className="chosen-monster__container__info__range">
                  <div
                    style={{
                      width: `${monsterStats.power * 100 + "%"}`,
                      height: "15px",
                      backgroundColor: "yellow"
                    }}
                  />
                </div>
                <span>{Math.floor(monsterStats.power * 100) + "%"}</span>
              </div>

              <p>danger: </p>
              <div className="chosen-monster__container__info__stat-container">
                <div className="chosen-monster__container__info__range">
                  <div
                    style={{
                      width: `${monsterStats.danger * 100 + "%"}`,
                      height: "15px",
                      backgroundColor: "rgb(212,78,110)"
                    }}
                  />
                </div>
                <span>{Math.floor(monsterStats.danger * 100) + "%"}</span>
              </div>

              <p>frequency: </p>
              <div className="chosen-monster__container__info__stat-container">
                <div className="chosen-monster__container__info__range">
                  <div
                    style={{
                      width: `${monsterStats.frequency * 100 + "%"}`,
                      height: "15px",
                      backgroundColor: "rgb(80, 180, 158)"
                    }}
                  />
                </div>
                <span>{Math.floor(monsterStats.frequency * 100) + "%"}</span>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (this.props.selectedMonster.length === 0) {
      return (
        <div className="chosen-monster">
          <p className="chosen-monster__title">
            error connecting to API... :-(
          </p>
          <br />
        </div>
      );
    }
  }
}

export default ChosenMonster;
