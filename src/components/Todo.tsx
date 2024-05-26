import { TodoId, type Todo as TodoType } from "../types"

// type Props = TodoType
interface Props extends TodoType {
    onRemoveTodo: ({ id }: TodoId) => void
}

export const Todo: React.FC<Props> = ({ id, title, completed, onRemoveTodo }) => {
    return (
        <div className='view'>
            <input
                className="toggle"
                type="checkbox"
                checked={completed}
                onChange={() => {
                    console.log('todo clicked')
                }}
            />
            <label>{title}</label>
            <button className="destroy" onClick={() => onRemoveTodo({ id })}></button>
        </div >
    )
}