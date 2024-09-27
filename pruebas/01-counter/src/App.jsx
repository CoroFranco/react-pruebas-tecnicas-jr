import { useState } from 'react'
import '../style.css'

export const App = () => {
  const [count, setCount] = useState(0)
  const countIncrement = () => {
    setCount(count + 1)
  }
  const countDecrese = () => {
    if (count === 0) return
    setCount(count - 1)
  }

  return (
    <main>
      <p>{count}</p>
      <div>
        <button onClick={countIncrement}>Aument</button>
        <button onClick={countDecrese}>Decrese</button>
      </div>
    </main>
  )
}
