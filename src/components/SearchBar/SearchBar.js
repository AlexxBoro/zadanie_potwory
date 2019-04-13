import React from "react";
import "./SearchBar.scss";

class SearchBar extends React.Component {
  state = { monsterName: "" };

  onInputChange = event => {
    this.setState({ monsterName: event.target.value.toLowerCase() });
  };

  onFormSubmit = event => {
    event.preventDefault();

    console.log(this.state.monsterName);
    this.props.onMonsterNameSubmit(this.state.monsterName);
  };

  render() {
    return (
      <section className="search-bar">
        <form onSubmit={this.onFormSubmit}>
          <label>type monster's name and press Enter</label>
          <input
            type="text"
            value={this.state.monsterName}
            onChange={this.onInputChange}
          />
        </form>
      </section>
    );
  }
}

export default SearchBar;
