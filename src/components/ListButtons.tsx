

interface ListButtonsProps {
    checked?: boolean
    className?: boolean
    children: any
    onClick: (event: any) => void
}

export default function ListButtons(props: ListButtonsProps) {

    const borderStyle = props.checked ? 'border-b-4 border-blue-700' : ''

    return (
        <button
            onClick={props.onClick}
            className={` text-gray-700 font-semibold hover:text-black focus:outline-none ${borderStyle}
            ${props.className}
        `}>
            {props.children}
        </button>
    )
}