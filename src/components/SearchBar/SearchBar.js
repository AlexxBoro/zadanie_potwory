import React from 'react';

import './SearchBar.scss';

class SearchBar extends React.Component{
    state = { term: '' };

    onInputChange = event => {
        this.setState({ term: event.target.value });
    };

    onFormSubmit = event => {
        event.preventDefault();
    };

    render(){
        return(
            <section className="search-bar">
                <form onSubmit={this.onFormSubmit}>
                    <label>type monster's name and press Enter</label>
                    <input type="text" value={this.state.term} onChange={this.onInputChange}/>
                </form>
            </section>
        );
    }
}

export default SearchBar;