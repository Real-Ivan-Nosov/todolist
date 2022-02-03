import React from 'react';

import TodoListItem from './TodoListItem/TodoListItem';
import './TodoList.css';

const TodoList = ({todos, onDeleted, onToggleImportant, onToggleDone}) => {

  const todoElements = todos.map((todo, id) => {
    return (
      <li key={id} className='list-group-item'>
      <TodoListItem
        task={todo.task}
        isImportant={todo.isImportant}
        isDone={todo.isDone}
        onDeleted={() => onDeleted(id)}
        onToggleImportant={() => onToggleImportant(id)}
        onToggleDone={() => onToggleDone(id)}
      />
      </li>)
  })

  return (
    <ul className='list-group todo-list'>
      { todoElements }
    </ul>)
}

export default TodoList;