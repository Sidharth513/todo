import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {addTodo, updateTodo} from '../features/todo/todoSlice' 

function TaskInput() {

    const [input, setInput] = useState('')
    const dispatch = useDispatch()
    const editTodo = useSelector(state => state.edit)

    const addTodoHandler = (e) => {
        e.preventDefault()// Prevents the default form submission behavior

        // If editTodo.id is null, dispatch the addTodo action, otherwise dispatch the updateTodo action
        editTodo.id === null ? dispatch(addTodo(input)) : dispatch(updateTodo({id:editTodo.id, text: input}))
        
        setInput('') // Reset the input field to an empty string
    }

    // useEffect hook to set the input value when editTodo changes
    useEffect(() => {
        setInput(editTodo.text)
    }, [editTodo])

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700  text-base outline-none text-gray-100 py-1 px-3 leading-8 "
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg"
      >
        {editTodo.id === null ? "Add Todo" : "Update Todo"}
      </button>
    </form>
  )
}

export default TaskInput