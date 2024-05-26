import { useState } from 'react'
import { Todos } from './components/Todos'
import { TodoId, Todo as TodoType } from './types'
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
  const [todos, setTodos] = useState(mockTodos)

  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
  }

  const handleComplete = ({ id, completed }: Pick<TodoType, 'id' | 'completed'>): void => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed
        }
      }
      return todo
    })
    setTodos(newTodos)
  }

  return (
    <div className="todoapp">
      <Todos todos={todos} onRemoveTodo={handleRemove} onToggleComplete={handleComplete} />
    </div>
  )
}

export default App
