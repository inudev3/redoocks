import { v4 as uuid } from 'uuid';

export const initialState = {
    toDos: [
      {
        id: 1,
        text: 'hi',
        completed: false,
        selected: false,
        
      }
    ],
   
  
   
}
export const ADD = 'add';
export const DELETE = 'delete';
export const TOGGLE = 'toggle';
export const EDIT = 'edit';
export const UPDATE= 'update';

const reducer = (state, action) => {
    switch (action.type) {
        case ADD:
          
            return { ...state, toDos: [...state.toDos, { id: uuid(), text: action.payload, completed:false }] };
        case DELETE:
            return { ...state, toDos: state.toDos.filter(item => item.id !== action.payload) };
        case TOGGLE:
            const toDoitems = [...state.toDos];
            const item = toDoitems.find(item => item.id === action.payload);
            item.completed = !item.completed;
            return { ...state, toDos: toDoitems };
        case EDIT:
            const toDo = state.toDos.find(toDO => toDO.id === action.payload);
            return { ...state, selected: toDo.id }
        case UPDATE:
            const { toDos, selected } = state;
            const newTodos = [...state.toDos];
            const newTodo = newTodos.find(item => item.id === selected)
            newTodo.text = action.payload;
            return {toDos:newTodos, selected:-1 }
        default:
            throw new Error();
    }
}

export default reducer;
