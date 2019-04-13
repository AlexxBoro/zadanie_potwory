import React from "react";
import "./MonstersList.scss";

class MonstersList extends React.Component {
  render() {
    const monsters = this.props.allmonsters.map((e, i) => {
      return (
        <div key={i} id={i} className="monsters-list__monster">
          <p className="monsters-list__monster--title">{e.name}</p>
          <img className="monsters-list__image" src={e.images.thumb} alt={e.name} />
        </div>
      );
    });
    return <section className="monsters-list">{monsters}</section>;
  }
}

export default MonstersList;
