import React, { useContext, useState } from "react";
import { ToDosContext } from "./context";
import { CANCEL, DELETE, EDIT, TOGGLE, UPDATE } from "./Actions"


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
    const onCancel = function(e){
            if (e.key === 'Escape') {
                dispatch({ type: CANCEL });
                setEditing(this.text);
            }
    }
    
    return (
        <>
            {state.toDos.map(toDo => (isComplete?(toDo.completed):(!toDo.completed))&&
            (<li key={toDo.id}>{toDo.id === state.selected ?
                (<form onSubmit={onSubmitEditing}>
                    <input type="text" placeholder="edit" value={editing} onChange={onChangeEditing}
                        onKeyDown={onCancel}/>
                </form>)
                : <span onDoubleClick={(e) => dispatch({ type: EDIT, payload: toDo.id })}>{toDo.text}</span>}
            <button onClick={(e) => dispatch({ type: DELETE, payload: toDo.id })}>❌</button>
            <button onClick={(e) => dispatch({ type: TOGGLE, payload: toDo.id })}>✅</button>
            </li>))}
        </>
     )
}
export default ToDo;

