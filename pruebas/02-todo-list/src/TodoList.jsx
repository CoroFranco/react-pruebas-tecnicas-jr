import { useState } from 'react'
import './style.css'

export const TodoList = () => {
  const [state, setState] = useState(false)
  const [todos, setTodos] = useState([])
  const [todoText, setTodoText] = useState('')
  const textButton = state ? 'sin finalizar' : 'finalizar'

  function handleClick () {
    setState(!state)
  }
  

  function handleInputText (event) {
    setTodoText(event.target.value)
  }

  function handleSubmit (event) {
    event.preventDefault()

    if (todoText.trim() === '') return

    const newTodo = {
      text: todoText,
      completed: false,
      id: Date.now()
    }

    setTodos([...todos, newTodo])
    setTodoText('')
  }

  function changeStateTask (i) {
    const updatedTodos = todos.map((todo, index) => (
      todo.id === i ? { ...todo, completed: !todo.completed } : todo
    ))

    setTodos(updatedTodos)
  }

  function deleteTask (id) {
    const updatedTodos = todos.filter(todo => todo.id !== id)
    setTodos(updatedTodos)
  }

  return (
    <main>
      <div className='todosContainer'>
        <section>

          <h2>Tareas por hacer</h2>
          <div>
            {
                todos.filter(todo => !todo.completed).map((todo, i) => (
                  <li key={todo.id}>
                    <ul>{todo.text}</ul>
                    <section>
                      <button onClick={() => changeStateTask(todo.id)}>➡️</button>
                      <button onClick={() => deleteTask(todo.id)}>⛔</button>
                    </section>
                  </li>
                ))
            }
          </div>
        </section>
        <section>

          <h2>Tareas Terminadas</h2>
          <div>
            {

                todos.filter(todo => todo.completed).map((todo, i) => (
                  <li key={todo.id}>
                    <ul>{todo.text}</ul>
                    <section>
                      <button onClick={() => changeStateTask(todo.id)}> ⬅️ </button>
                      <button onClick={() => deleteTask(todo.id)}>⛔</button>
                    </section>
                  </li>
                ))
            }
          </div>

        </section>
      </div>
      <section>
        <h1>create TODO</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor=''>Description</label>
          <textarea onChange={handleInputText} value={todoText} />
          <button type='submit'>Create</button>
        </form>
      </section>

    </main>
  )
}
