import React, { useContext, useState } from "react";
import { ToDosContext } from "./context";
import { DELETE, EDIT, TOGGLE, UPDATE } from "./reducer";


const ToDo = ({isComplete}) => {
    const { state, dispatch } = useContext(ToDosContext);
    const [editing, setEditing] = useState();
  
  
    const onChangeEditing = (e) => {
      const { target: { value } } = e;
      setEditing(value);
    }
    const onSubmitEditing = (e) => {
      e.preventDefault();
      dispatch({ type: UPDATE, payload: editing });
    }
    
     return(   
        <ul>
             {state.toDos.map(toDo => (isComplete?(toDo.completed):(!toDo.completed))&&
            (<li key={toDo.id}>{toDo.id === state.selected ?
                (<form onSubmit={onSubmitEditing}>
                    <input type="text" placeholder="edit" value={editing} onChange={onChangeEditing} />
                </form>)
                : <span onDoubleClick={(e) => dispatch({ type: EDIT, payload: toDo.id })}>{toDo.text}</span>}
                <button onClick={(e) => dispatch({ type: DELETE, payload: toDo.id })}>❌</button>
                <button onClick={(e) => dispatch({ type: TOGGLE, payload: toDo.id })}>✅</button>
        </li>))}
        </ul>
     )
}
export default ToDo;

