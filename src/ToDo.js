import React, { useContext, useState } from "react";
import { ToDosContext } from "./context";
import { CANCEL, DELETE, EDIT, TOGGLE, UPDATE } from "./Actions"


const ToDo = ({id, text, completed, isComplete}) => {
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
    
    return (
        
        <>
            {(isComplete?completed:!completed)&&
            (<li key={id}>{id === state.selected ?
                (<form onSubmit={onSubmitEditing}>
                    <input type="text" placeholder="edit" value={editing} onChange={onChangeEditing}
                        onKeyDown={(e) => {
                            if (e.key === 'Escape') {
                                dispatch({ type: CANCEL });
                                setEditing(text);
                            }
                        }}/>
                </form>)
                : <span onDoubleClick={(e) => dispatch({ type: EDIT, payload: id })}>{text}</span>}
            <button onClick={(e) => dispatch({ type: DELETE, payload: id })}>❌</button>
            <button onClick={(e) => dispatch({ type: TOGGLE, payload: id })}>✅</button>
            </li>)}
        </>
     )
}
export default ToDo;

