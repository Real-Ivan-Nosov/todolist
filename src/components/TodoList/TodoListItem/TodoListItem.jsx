import React, { Component } from 'react';

import './TodoListItem.css';

class TodoListItem extends Component {

  constructor() {
    super();
    this.state = {
      isDone: true,
      isImportance: false
    }
  }

  onTaskClick = () => {
    this.setState((state) => {
      return {
        isDone: !state.isDone
      }
    })
  }

  onMarkImportant = () => {
    this.setState((state) => {
      return {
        isImportance: !state.isImportance
      }
    })
  }

  render() {

    const { task, onDeleted } = this.props;
    const { isDone, isImportance } = this.state;

    let classNames = 'todo-list-item';
    if (isDone) {
      classNames += ' done'
    }
    if (isImportance) {
      classNames += ' important'
    }

    return <span className={classNames}>
      <span className='todo-list-item-task' onClick={this.onTaskClick}>{task}</span>

      <button type="button"
        className="btn btn-outline-success btn-sm float-end"
        onClick={this.onMarkImportant}>
        <i className="bi bi-exclamation-lg" />
      </button>

      <button type="button"
        className="btn btn-outline-danger btn-sm float-end"
        onClick={onDeleted}>
        <i className="bi bi-trash-fill" />
      </button>
    </span>
  }

}


export default TodoListItem;
