import React, { useContext, useReducer, useState } from 'react';
import { ToDosContext } from './context';
import { ADD } from './Actions';

const Add = () => {
    const {state,dispatch} = useContext(ToDosContext);
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


    return (
        <form onSubmit={onSubmit}>
        <input type='text'
          placeholder='Write to do'
          value={newTodo}
          onChange={onChange} />
      </form>
    )
}
export default Add;