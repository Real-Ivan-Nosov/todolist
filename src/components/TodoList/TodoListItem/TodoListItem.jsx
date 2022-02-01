import React from 'react';

import './TodoListItem.css';

const TodoListItem = ({ task, importance }) => {
  return <span className={`${importance} todo-list-item`}>
    <span className='todo-list-item-task'>{task}</span>

    <button type="button"
      className="btn btn-outline-success btn-sm float-end">
      <i className="bi bi-exclamation-lg" />
    </button>

    <button type="button"
      className="btn btn-outline-danger btn-sm float-end">
      <i className="bi bi-trash-fill" />
    </button>
  </span>
}

export default TodoListItem;
