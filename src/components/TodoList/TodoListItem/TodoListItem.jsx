import React, { Component } from 'react';

import './TodoListItem.css';

class TodoListItem extends Component {
 
  render() {

    const { task, onDeleted, onToggleImportant, onToggleDone,
      isDone, isImportant} = this.props;


    let classNames = 'todo-list-item';
    if (isDone) {
      classNames += ' done'
    }
    if (isImportant) {
      classNames += ' important'
    }

    return <span className={classNames}>
      <span className='todo-list-item-task' onClick={onToggleDone}>{task}</span>

      <button type="button"
        className="btn btn-outline-success btn-sm float-end"
        onClick={onToggleImportant}>
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
