import { Todos } from './components/Todos'
import { useState } from 'react'
import './App.css'

const mockTodos = [
  {
    id: 1,
    title: 'Learn React',
    completed: false,
  },
  {
    id: 2,
    title: 'Build something great',
    completed: true,
  },
  {
    id: 3,
    title: 'Profit!',
    completed: false,
  },
]

const App = (): JSX.Element => {
  const [todos] = useState(mockTodos)

  return (
    <div className="todoapp">
      <Todos todos={todos} />
    </div>
  )
}

export default App
