import React, { Component } from 'react';

import TodoList from '../TodoList/TodoList';
import AppHeader from '..//AppHeader/AppHeader';
import SearchPanel from '..//SearchPanel/SearchPanel';
import ItemStatusFilter from '..//ItemStatusFilter/ItemStatusFilter';
import ItemAddForm from '../ItemAddForm/ItemAddForm';

import './App.css';



class App extends Component {

  constructor() {
    super();
    this.state = {
      todoData: [
        this.createTodoTask('eat'),
        this.createTodoTask('sleep'),
        this.createTodoTask('play'),
        this.createTodoTask('walk'),
        this.createTodoTask('anime')],
      term: '',
      mode: 'all'
    };
  }

  maxId = 100;

  createTodoTask(text) {
    return {
      task: text,
      isImportant: false,
      isDone: false,
      id: this.maxId++
    }
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

  addTask = (text) => {
    const newTask = this.createTodoTask(text);

    this.setState(({ todoData }) => {
      return ({
        todoData: [...todoData, newTask]
      })
    })
  }

  toggleProperty = (arr, id, propName) => {
    const idx = arr.findIndex((el, index) => index === id);

    const oldTask = arr[idx];
    const newTask = { ...oldTask, [propName]: !oldTask[propName] };

    return [
      ...arr.slice(0, idx),
      newTask,
      ...arr.slice(idx + 1)
    ]
  }


  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'isImportant')
      }
    })
  }

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'isDone')
      }
    })
  }

  search = (tasks, term) => {
    if (term.length === 0) {
      return tasks;
    }
    return tasks.filter(el => el.task.toLowerCase().includes(term.toLowerCase()));
    }
    
  searchChange = (term) => {
    this.setState({term})
  }
  
  changeMode = (modeType) => {
    this.setState({
      mode: modeType
    }) 
  }

  modeChecker = (tasks, mode) => {
    if (mode === 'done') {
      return tasks.filter((el) => el.isDone)
    } else if (mode === 'active') {
      return tasks.filter((el) => !el.isDone)
    } else {
      return tasks
    }
  }

  render() {

    const { todoData, term, mode } = this.state;
    const visibleTasks = this.modeChecker(this.search(todoData, term), mode);

    const doneCount = todoData.filter((el) => el.isDone).length;
    const todoCount = todoData.length - doneCount;

    

    return (
      <div className='todo-app' >
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className='top-panel d-flex'>
          <SearchPanel searchChange={this.searchChange} />
          <ItemStatusFilter changeMode={this.changeMode} mode={mode} />
        </div>

        <TodoList
          todos={visibleTasks}
          onDeleted={(id) => this.deleteItem(id)}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={(id) => this.onToggleDone(id)}
        />

        <ItemAddForm addTask={(text) => this.addTask(text)} />
      </div>
    )
  }


}

export default App;
