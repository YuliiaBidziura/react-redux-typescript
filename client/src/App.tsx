import React from 'react';
import TodoList from './components/TodoList';
import UserLis from './components/UserList';

const App = () => {
  return (
    <div>
      <UserLis />
      <hr />
      <TodoList />
    </div>
  );
};
export default App;