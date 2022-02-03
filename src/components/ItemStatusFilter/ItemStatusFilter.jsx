import React, { Component } from 'react';

import './ItemStatusFilter.css';

class ItemStatusFilter extends Component {

  constructor(props) {
    super();
  }
  
  buttons = [
    {name: 'all', label: 'All'},
    {name: 'active', label: 'Active'},
    {name: 'done', label: 'Done'}
  ]
  

  render() {

    const {changeMode, mode} = this.props;

    const buttons = this.buttons.map(({ name, label}) => {
      let buttonClasses = 'btn';
      const isCurrentMode = mode === name;
      isCurrentMode ? buttonClasses += ' btn-info' : buttonClasses += ' btn-outline-secondary'
      return (
        <button type="button"
          className={buttonClasses}
          key={label}
          onClick={() => changeMode(name)}>{label}</button>
      )
    })

    return (
      <div className="btn-group">
        { buttons }
      </div>
    )
  }
}

export default ItemStatusFilter;
