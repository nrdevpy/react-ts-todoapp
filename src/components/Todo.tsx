import { TodoId, type Todo as TodoType } from "../types"

interface Props extends TodoType {
    onRemoveTodo: ({ id }: TodoId) => void
    onToggleComplete: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
}

export const Todo: React.FC<Props> = ({ id, title, completed, onRemoveTodo, onToggleComplete }) => {
    const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>): void => {
        onToggleComplete({ id, completed: event.target.checked })
    }

    return (
        <div className='view'>
            <input
                className="toggle"
                type="checkbox"
                checked={completed}
                onChange={event => handleChangeCheckbox(event)}
            />
            <label>{title}</label>
            <button className="destroy" onClick={() => onRemoveTodo({ id })}></button>
        </div >
    )
}