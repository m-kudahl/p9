import TodoList from "./TodoList";
import React, { useState, useRef } from "react";

function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  function handleAddTodo(e) {
const name = todoNameRef.current.value
    if (name === '') return
    setTodos(prevTodos => {
      return [...prevTodos, {id: 1, name: name, complete: false} ]
    }
      )
    todoNameRef.current.value = null
  }

  return (
    <>
    <TodoList todos={todos} />
    <input ref={todoNameRef} type="text" />
    <button onClick={handleAddTodo}>Test Button</button>
    <button>Test Button 2</button>
    <div>Testy</div>
    </>
  )
}
export default App;
