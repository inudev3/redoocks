import React, { useReducer } from 'react';
import { useState } from 'react';
import {v4 as uuid} from "uuid";
import reducer, { ADD, COMPLETE, DELETE, EDIT, initialState, TOGGLE, UPDATE } from './reducer';
  




function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [editing, setEditing] = useState();
  const [newTodo, setNewToDo] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ADD, payload: newTodo });
    setNewToDo('');
  }
  const onChange = (e) => {
    const { target: { value } } = e;
    setNewToDo(value);
  }
  const onChangeEditing = (e) => {
    const { target: { value } } = e;
    setEditing(value);
  }
  const onSubmitEditing = (e) => {
    e.preventDefault();
    dispatch({ type: UPDATE, payload: editing });
  }

  return (
        <>
        <h1>To Dos</h1>
        <form onSubmit={onSubmit}>
        <input type='text'
          placeholder='Write to do'
          value={newTodo}
          onChange={onChange} />
      </form>
      <ul>
        <h2>To Dos</h2>
        {state.toDos.map(toDo =>(toDo.completed ||
          (<li key={toDo.id}>{toDo.id === state.selected ?
          (<form onSubmit={onSubmitEditing}>
            <input type="text" placeholder="edit" value={editing} onChange={onChangeEditing} />
          </form>)
          :<span onDoubleClick={(e) => dispatch({ type: EDIT, payload: toDo.id })}>{toDo.text}</span>}
          <button onClick={(e)=>dispatch({type:DELETE, payload:toDo.id})}>❌</button>
          <button onClick={(e)=>dispatch({type:TOGGLE, payload:toDo.id})}>✅</button>
        </li>)))}
      </ul>
      <ul>
        <>  
          <h2>Completed ToDos</h2>
    
     
          {state.toDos.map(toDo => (toDo.completed &&
            (<li key={toDo.id}>
            {toDo.id === state.selected ?
              (<form onSubmit={onSubmitEditing}>
              <input type="text" placeholder="edit" value={editing} onChange={onChangeEditing} />
              </form>)
              : <span onDoubleClick={(e) => dispatch({ type: EDIT, payload: toDo.id })}>{toDo.text}</span>}
          <button onClick={(e)=>dispatch({type:DELETE, payload:toDo.id})}>❌</button>
          <button onClick={(e)=>dispatch({type:TOGGLE, payload:toDo.id})}>✅</button>
          </li>)))}
          </>
          
      </ul>
        </>
    )

}

export default App; 