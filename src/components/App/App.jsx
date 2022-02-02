import React, { Component } from 'react';

import TodoList from '../TodoList/TodoList';
import AppHeader from '..//AppHeader/AppHeader';
import SearchPanel from '..//SearchPanel/SearchPanel';
import ItemStatusFilter from '..//ItemStatusFilter/ItemStatusFilter';

import './App.css';



class App extends Component {

  constructor() {
    super();
    this.state = {
      todoData: [
        { task: 'eat', isImportant: true },
        { task: 'sleep', isImportant: true },
        { task: 'play', isImportant: false },
        { task: 'walk', isImportant: true },
        { task: 'anime', isImportant: false }]
    };
  }

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el, index) => index === id);

      const before = todoData.slice(0, idx);
      const after = todoData.slice(idx + 1);
      const newArray = [...before, ...after];

      return {
        todoData: newArray
      }
    }) 
  }
 
  render() {
    return (
      <div className='todo-app' >
        <AppHeader toDo={1} done={3} />
        <div className='top-panel d-flex'>
          <SearchPanel />
          <ItemStatusFilter />
        </div>

        <TodoList
          todos={this.state.todoData}
          onDeleted={(id) => this.deleteItem(id)}
        />
      </div>
    )
  }


}

export default App;
