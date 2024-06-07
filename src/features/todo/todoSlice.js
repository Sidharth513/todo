import {createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [{id: 1, text: "todo", completed : false}],
    edit: {id: null, text: null}
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload,
                completed:false
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload ) // Filter out the todo with the given id
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map((todo) => {
                if(action.payload.id === todo.id){
                    todo.text = action.payload.text // Update the text of the matched todo
                }
                return todo
            } )            
            state.edit = {id: null, text: null} // Reset the edit state
        },
        editTodo: (state, action) => {
            state.edit = action.payload // Set the edit state to the payload
        },
        fetchAllTodos: (state, action) => {
            state.todos = [...action.payload];
        },
        toggleTodo:(state,action)=>{
            state.todos = state.todos.map((todo)=>{
                if(action.payload===todo.id){
                    todo.completed = !todo.completed;
                }
                return todo;
            });

        }
    }
})

export const {addTodo, removeTodo,updateTodo,editTodo,fetchAllTodos,toggleTodo} = todoSlice.actions

export default todoSlice.reducer