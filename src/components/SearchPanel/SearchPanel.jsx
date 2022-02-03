import React, { Component } from 'react';

import './SearchPanel.css';

class SearchPanel extends Component {

    constructor(props) {
      super();
      this.state = {
        term: ''
      }
    }

    onSearchChange = (e) => {
      this.setState({
        term: e.target.value
      })
      this.props.searchChange(e.target.value)
    }

    render() {
      return (
      <input type="text"
              className="form-control search-input"
              placeholder="type to search"
              value={this.state.term}
              onChange={this.onSearchChange} />
    )
    }
  }

export default SearchPanel;