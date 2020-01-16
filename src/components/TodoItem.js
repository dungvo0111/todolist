import React from 'react'

export default function TodoItem( {todoItem, toogleTodo }) {
    
    //Enable checking and unchecking box
    const handleCheck = () => {
        toogleTodo(todoItem.id)
    }
    return (
        <div>
            <label>
                <input type='checkbox' checked={todoItem.complete} onChange={handleCheck}/>
                {todoItem.name}
            </label>
          
        </div>
    )
}
