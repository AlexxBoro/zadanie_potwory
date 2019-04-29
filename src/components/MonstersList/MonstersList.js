import React from "react";
import "./MonstersList.scss";

class MonstersList extends React.Component {
  render() {
    console.log("renderuje liste potworow - MonstersList");

    if (this.props.allmonsters.length) {
      const monsters = this.props.allmonsters.map((e, i) => {
        return (
          <div
            key={e.name}
            className={
              this.props.selectedMonster.name === e.name
                ? `monsters-list__monster monsters-list__monster--${i} frame`
                : `monsters-list__monster monsters-list__monster--${i}`
            }
          >
            <p
              className={
                this.props.selectedMonster.name === e.name
                  ? "monsters-list__monster__title active"
                  : "monsters-list__monster__title"
              }
            >
              {e.name}
            </p>
            <div style={{ height: "120px", margin: "0 auto" }}>
              <img
                className="monsters-list__image"
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
          style={{ width: "150px", height: "100px" }}
          src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"
          alt="loader"
        />
      );
    }
  }
}

export default MonstersList;
