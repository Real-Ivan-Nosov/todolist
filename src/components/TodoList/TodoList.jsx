import React from 'react';

import TodoListItem from './TodoListItem/TodoListItem';

const TodoList = () => {

    const tasks = ['eat', 'sleep', 'play', 'walk', 'anime']
    return (
      <ul>
        {tasks.map((task, id) => <li key={id}><TodoListItem task={task}/></li> )}
      </ul>
    )
  }

export default TodoList;