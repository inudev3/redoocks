import React from 'react';
import { useState } from 'react';
import {v4 as uuid} from "uuid";
import Add from './Add';
import ToDosProvider from './context';
import  { ADD,  DELETE, EDIT,  TOGGLE, UPDATE } from './reducer';
import ToDo from './ToDo';
  




function App() { 

  return (
        <>
        <ToDosProvider>
         <Add/>
        <h2>To Dos</h2>
        <ToDo isComplete={false}/>
        <h2>Completed ToDos</h2>
        <ToDo isComplete={true}/>
        </ToDosProvider>
        </>
    )

}

export default App; 