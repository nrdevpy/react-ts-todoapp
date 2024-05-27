import { useState } from "react"
import { TodoTitle } from "../types"

interface Props {
    onAddTodo: (title: TodoTitle) => void
}

export const CreateTodo: React.FC<Props> = ({ onAddTodo }) => {
    const [inputValue, setValue] = useState("")

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault()
        if (inputValue.trim() === "") return
        onAddTodo({ title: inputValue })
        setValue("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                className="new-todo"
                type="text"
                placeholder="Escribir una tarea"
                value={inputValue}
                onChange={event => setValue(event.target.value)}
                autoFocus
            />
        </form>
    )
}