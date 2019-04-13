import React from "react";
import "./MonstersList.scss";

class MonstersList extends React.Component {
  render() {
    const monsters = this.props.allmonsters.map((e, i) => {
      return (
        <div key={i} id={i}>
          <div className="monsters-list__monster">
            <h1 className="monsters-list__monster--title">{e.name}</h1>
            <img src={e.images.thumb} alt={e.name} />
          </div>
        </div>
      );
    });

    return <section className="monsters-list">{monsters}</section>;
  }
}

export default MonstersList;
