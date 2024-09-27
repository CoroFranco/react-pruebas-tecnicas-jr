import { createRoot } from 'react-dom/client'
import { TodoList } from './src/TodoList'

const root = createRoot(document.getElementById('app'))

root.render(
  <TodoList />
)
