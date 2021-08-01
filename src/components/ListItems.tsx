import Selection from "./Selection";

interface ListItemsprops {
    value: string
    completed: boolean
    changeStatus: () => void
}

export default function ListItems(props: ListItemsprops) {

    const textCompletedStyle = props.completed ? 'line-through text-gray-400 ' : 'text-gray-700'

    return (
        <li
            onClick={props.changeStatus}
            className={`flex items-center p-4 border-b border-gray-600 rounded-xl cursor-pointer text-xl text-black`}>
            <Selection checked={props.completed} />
            <span className={`font-light m-2 ${textCompletedStyle} `}>
                {props.value}
            </span>
        </li>
    )
}