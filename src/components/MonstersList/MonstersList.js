import React from "react";
import "./MonstersList.scss";

class MonstersList extends React.Component {
  render() {
    const monsters = this.props.allmonsters.map((e, i) => {
      return (
        <div key={i} className={`monsters-list__monster monsters-list__monster--${i}`}>
          <p className="monsters-list__monster--title">{e.name}</p>
          <div style={{height:"120px", margin:"0 auto"}}>
            <img className="monsters-list__image" src={e.images.thumb} alt={e.name} />
          </div>
          
        </div>
      );
    });
    return <section className="monsters-list">{monsters}</section>;
  }
}

export default MonstersList;
