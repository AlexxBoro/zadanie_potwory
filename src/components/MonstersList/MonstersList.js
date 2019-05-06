import React from "react";
import "./MonstersList.scss";

class MonstersList extends React.Component {
  render() {
    if (this.props.allmonsters) {
      const monsters = this.props.allmonsters.map((e, i) => {
        return (
          <div
            key={e.name}
            className={
              this.props.selectedMonster.name === e.name
                ? `monsters-list__monster monsters-list__monster active-frame`
                : `monsters-list__monster monsters-list__monster`
            }
          >
            <div>
              <p
                className={
                  this.props.selectedMonster.name === e.name
                    ? "monsters-list__monster__title active-text"
                    : "monsters-list__monster__title"
                }
              >
                {e.name}
              </p>
              <img
                className={
                  i % 2 === 0
                    ? "monsters-list__image monsters-list__image--animation1"
                    : "monsters-list__image monsters-list__image--animation2"
                }
                src={e.images.thumb}
                alt={e.name}
              />
            </div>
          </div>
        );
      });
      return <section className="monsters-list">{monsters}</section>;
    } else {
      return (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"
          alt="loader"
        />
      );
    }
  }
}

export default MonstersList;
