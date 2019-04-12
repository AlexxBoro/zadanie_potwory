import React from 'react';
import Monster from '../Monster/Monster';

import './MonstersList.scss';

class MonstersList extends React.Component{

    render(){

        const monsters = this.props.allmonsters.map((e,i) => {
            return(
                <div key={i} style={{display:"inline-block"}}>
                    <h1>{e.name}</h1>
                    <h2>{e.slug}</h2>
                    <img src="" alt="" />
                </div>
            )
        })

        return(
            <>
                <div className="monsters-list">tu bedzie lista potworow, a w niej kilka komponentow , jeden dla kazdego potwora.
                    {monsters}
                    <Monster />
                </div>
            
            </>
        );
    }
}

export default MonstersList;