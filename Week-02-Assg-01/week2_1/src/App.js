import React from 'react';
import './App.css';
import IsDoneTitle from './component/IsDoneTitle';
import TodoListItem from './component/TodoListItem';
import TodoTitle from './component/TodoTitle';
import IsDoneItem from './component/IsDoneItem';
import "bootstrap-icons/font/bootstrap-icons.css";
import Input from './component/Input';

//Components are called from App js based on hearing and position on the page
function App() {
  return (
    <>
      <div className='input'>
        <Input></Input>
      </div>
      <div className="App d-flex justify-content-center">
        <div className="todo me-3 ">
          <TodoTitle></TodoTitle>
          <TodoListItem></TodoListItem>
        </div>
        <div className="isdone">
          <IsDoneTitle></IsDoneTitle>
          <IsDoneItem></IsDoneItem>
        </div>
      </div>
    </>
  );
}




export default App;
