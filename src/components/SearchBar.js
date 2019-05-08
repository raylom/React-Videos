import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = event => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();
    //TODO make sure we call callaback from parent component
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" action="" onSubmit={this.onFormSubmit}>
          <label htmlFor="">Video Search</label>
          <input
            onChange={this.onInputChange}
            type="text"
            value={this.state.term}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
