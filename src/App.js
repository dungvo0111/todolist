import React, { useState, useRef, useEffect } from 'react';
import Todolist from './components/Todolist';
import './App.css';
import uuidv4 from 'uuid/v4';

const STORAGE_KEY = 'todolist'

function App() {
  const [todos, setTodos] = useState([{id: 1, name: 'td1', complete: true}])
  const todoValue = useRef()
  
  //Load  stored TodoList when refreshing app
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  }, [])

  //Update Todolist storage whenever new todo item is added
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  //Add new todo item
  const addTodo = (e) => {
    const name = todoValue.current.value
    if(name ==='') return
    setTodos(prevTodos => {return [...prevTodos, {id: uuidv4(), name: name, complete: false}]})
    todoValue.current.value = null
  }

  //Manipulate checkbox of todo item
  const toogleTodo = (id) => {
    const newTodosList = [...todos]
    const todo = newTodosList.find(todo => todo.id ===id)
    todo.complete = !todo.complete
    setTodos(newTodosList)
  }

  //Clear completed todo item
  const delComplete = () => {
    const newTodosList = todos.filter(todo => !todo.complete)
    setTodos(newTodosList)
  }
  return (
    <div id='container'>
      <h1>Todo List</h1>
      <Todolist todos={todos} toogleTodo={toogleTodo} />
      <input type='text' style={{flex: '10', padding: '5px'}} placeholder="Add Todo..." ref={todoValue}></input>
      <button className='btn' onClick={addTodo}>Add Todo</button>
      <button className='btn' onClick={delComplete}>Clear completed</button>
      <div>{todos.filter(todo => !todo.complete).length} left to do</div>
    </div>
  );
}

export default App;
