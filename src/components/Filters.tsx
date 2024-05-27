import { FILTERS_BUTTONS } from "../consts"
import { FilterValue } from "../types"

interface Props {
    filterSelected: FilterValue,
    onFilterChange: (filter: FilterValue) => void
}

export const Filters: React.FC<Props> = ({ filterSelected, onFilterChange }) => {
    const handleClick = (filter: FilterValue): void => {
        onFilterChange(filter)
    }
    return (
        <ul className="filters">
            {
                Object.entries(FILTERS_BUTTONS).map(([key, { href, literal }]) => {
                    const isSelected = filterSelected === key
                    const className = isSelected ? "selected" : ""

                    return (
                        <li key={key}>
                            <a
                                className={className}
                                onClick={event => {
                                    event.preventDefault()
                                    handleClick(key as FilterValue)
                                }}
                                href={href}
                            >
                                {literal}
                            </a>
                        </li>
                    )
                })
            }
        </ul>
    )
}