import './App.css'
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'
import { useDispatch,useSelector } from 'react-redux';
import { useEffect } from 'react';
import {fetchAllTodos} from './features/todo/todoSlice'

function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  // Effect to run once when the component mounts
  useEffect(() => {
    // Retrieve todos from localStorage
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos?.length > 0) {
      // If there are any todos in localStorage, dispatch them to update the Redux store
      dispatch(fetchAllTodos(todos));
    }
  }, []);

  // Effect to run whenever the todos state changes
  useEffect(() => {
    if (todos !== null) {
      // If the todos state is not null, save it to localStorage
      localStorage.setItem("todos", JSON.stringify([...todos]));
    }
  }, [todos]);

  return (
    <>
      <h1 className='text-4xl'>Todo List</h1>
      <TaskInput />
      <TaskList />
    </>
  )
}

export default App
