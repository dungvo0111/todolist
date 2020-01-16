import React from 'react'
import TodoItem from './TodoItem'
export default function Todolist( {todos, toogleTodo} ) {
    return (
        todos.map(todoItem => {
            return <TodoItem key={todoItem.id} todoItem={todoItem} toogleTodo={toogleTodo}/>
        })
    )
}
