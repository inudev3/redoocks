import React, { useContext } from 'react';
import Add from './Add';
import { ToDosContext } from '../context';
import List from "./List";
import ToDo from './ToDo';
  




function App() { 
  const { state } = useContext(ToDosContext);
  return (
        <>
         <Add/>
      <List name="To Do">
        {state.toDos.map(todo =>
          <ToDo key={todo.id} id={todo.id} text={todo.text} completed={todo.completed} isComplete={false} />)}
        </List>
      <List name="Completed To Do">
        {state.toDos.map(todo=>
          <ToDo key={todo.id} id={todo.id} text={todo.text} completed={todo.completed} isComplete={true} />
        )}
        </List>
        </>
    )

}

export default App; 