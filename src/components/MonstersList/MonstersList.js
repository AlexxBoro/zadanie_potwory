import React from "react";
import "./MonstersList.scss";

class MonstersList extends React.Component {
  render() {
    console.log("renderuje liste potworow - MonstersList")
    if(this.props.allmonsters.length !== 0){
      const monsters = this.props.allmonsters.map((e, i) => {
        return (
          <div
            key={i}
            className={`monsters-list__monster monsters-list__monster--${i}`}
          >
            <p className="monsters-list__monster__title">{e.name}</p>
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
    }
    else {
      return(
        <img style={{width:'150px', height: '100px'}} src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt="loader"/>
      )
    }
  }
}

export default MonstersList;
