import React from 'react';
import Add from './Add';
import List from "./List";
import ToDo from './ToDo';
  




function App() { 

  return (
        <>
         <Add/>
        <List name="To Do">
        <ToDo isComplete={false} />
        </List>
        <List name="Completed To Do">
        <ToDo isComplete={true}/>
        </List>
        </>
    )

}

export default App; 