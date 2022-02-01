import React from 'react';
import ReactDOM from 'react-dom';

import TodoList from './components/TodoList/TodoList';
import AppHeader from './components/AppHeader/AppHeader';
import SearchPanel from './components/SearchPanel/SearchPanel';
import ItemStatusFilter from './components/ItemStatusFilter/ItemStatusFilter';

import './index.css';

const todoData = [{ task: 'eat', isImportant: true }, { task: 'sleep', isImportant: true },
{ task: 'play', isImportant: false }, { task: 'walk', isImportant: true }, { task: 'anime', isImportant: false }];


const App = () => {

  return (
    <div className='todo-app'>
      <AppHeader toDo={1} done={3} />
      <div className='top-panel d-flex'>
        <SearchPanel />
        <ItemStatusFilter />
      </div>

      <TodoList todos={todoData}/>
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'));