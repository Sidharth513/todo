import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {editTodo, removeTodo} from '../features/todo/todoSlice'

function TaskList() {
    // Select todos from the Redux store
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

  return (
    <>
    <div className='text-white' >Todos</div>
    <ul className="list-none">
        {todos.map((todo) => (
          // Map over todos and create a list item for each todo 
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            <div className='text-white'>{todo.text}</div>
            <div className='flex gap-2' >
            <button
                className="text-white bg-blue-500 border-0 py-1 px-4 focus:outline-none hover:bg-blue-600 rounded text-md"
                onClick={() => dispatch(editTodo({id: todo.id, text: todo.text}))}
            >
                Edit
            </button>
            <button
             onClick={() => dispatch(removeTodo(todo.id))}
              className="text-white bg-white border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
            >
              ❌
            </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}

export default TaskList