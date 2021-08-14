import React, { createContext, useContext, useReducer } from "react";
import reducer,{initialState} from "./reducer";


export const ToDosContext = createContext();

const ToDosProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <ToDosContext.Provider value={{ state, dispatch }}>{children}</ToDosContext.Provider>
    )
}
export default ToDosProvider