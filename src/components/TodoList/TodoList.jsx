import React from 'react';

import TodoListItem from './TodoListItem/TodoListItem';
import './TodoList.css';

const TodoList = ({todos, onDeleted}) => {

  const todoElements = todos.map((todo, id) => {
    return (
      <li key={id} className='list-group-item'>
      <TodoListItem
        task={todo.task}
        importance={todo.isImportant ? true : false}
        onDeleted={() => onDeleted(id)}
      />
      </li>)
  })

  return (
    <ul className='list-group todo-list'>
      { todoElements }
    </ul>)
}

export default TodoList;