import React from 'react';
import axios from 'axios';
import SearchBar from '../SearchBar/SearchBar';
import ChosenMonster from '../ChosenMonster/ChosenMonster';
import MonstersList from '../MonstersList/MonstersList';
import './App.scss';

class App extends React.Component{

    constructor(props) {
        super(props);
        this.state = { monsters: [] };
    }
    
    componentDidMount(){
        axios.get('http://localhost:8080/api/v1/monsters')
        .then(response => {
            this.setState({ monsters: response.data.data });
            console.log(response.data.data);
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    render(){
        return(
            <>
            <SearchBar />
            <ChosenMonster />
            <MonstersList allmonsters = {this.state.monsters} />
            </>
        );
    }
}

export default App;