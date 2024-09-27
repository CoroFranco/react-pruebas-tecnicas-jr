import { createRoot } from 'react-dom/client'
import {UserList} from './src/UserList'

const root = createRoot(document.getElementById('app'))

root.render(
    <UserList />
)