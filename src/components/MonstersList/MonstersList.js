import React from 'react';
import Monster from '../Monster/Monster';

import './MonstersList.scss';

class MonstersList extends React.Component{
    render(){
        return(
            <>
                <div class="monsters-list">tu bedzie lista potworow, a w niej kilka komponentow , jeden dla kazdego potwora.
                    <Monster />
                </div>
            
            </>
        );
    }
}

export default MonstersList;