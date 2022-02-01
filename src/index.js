import React from 'react';
import ReactDOM from 'react-dom';

import TodoList from './components/TodoList/TodoList';
import AppHeader from './components/AppHeader/AppHeader';
import SearchPanel from './components/SearchPanel/SearchPanel';

const App = () => {

 

  return (
    <div>

      <AppHeader />
      <SearchPanel />
      <TodoList />
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'));