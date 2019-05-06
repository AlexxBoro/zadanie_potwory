import React from "react";
import "./ChosenMonster.scss";

class ChosenMonster extends React.Component {

  statPercent = (param) => {
    return Math.floor(param * 100) + "%";
  }

  render() {
    if (this.props.selectedMonster) {
      const chosenMonster = this.props.selectedMonster;
      const monsterStats = this.props.selectedMonsterStats;
      const monsterImages = this.props.selectedMonsterImages;

      return (
        <section className="chosen-monster">
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
                      width: `${this.statPercent(monsterStats.power)}`,
                      height: "15px",
                      backgroundColor: "yellow"
                    }}
                  />
                </div>
                <span>{this.statPercent(monsterStats.power)}</span>
              </div>

              <p>danger: </p>
              <div className="chosen-monster__container__info__stat-container">
                <div className="chosen-monster__container__info__range">
                  <div
                    style={{
                      width: `${this.statPercent(monsterStats.danger)}`,
                      height: "15px",
                      backgroundColor: "rgb(212,78,110)"
                    }}
                  />
                </div>
                <span>{this.statPercent(monsterStats.danger)}</span>
              </div>

              <p>frequency: </p>
              <div className="chosen-monster__container__info__stat-container">
                <div className="chosen-monster__container__info__range">
                  <div
                    style={{
                      width: `${this.statPercent(monsterStats.frequency)}`,
                      height: "15px",
                      backgroundColor: "rgb(80, 180, 158)"
                    }}
                  />
                </div>
                <span>{this.statPercent(monsterStats.frequency)}</span>
              </div>
            </div>
          </div>
        </section>
      );
    } else {
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
