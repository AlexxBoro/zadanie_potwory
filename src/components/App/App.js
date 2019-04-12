import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import ChosenMonster from '../ChosenMonster/ChosenMonster';
import MonstersList from '../MonstersList/MonstersList';

import './App.scss'

class App extends React.Component{
    
    componentDidMount(){
        // tu bedzie zapytanie do API - axios
    }

    render(){
        return(
            <>
            <SearchBar />
            <ChosenMonster />
            <MonstersList />
            </>
        );
    }
}

export default App;