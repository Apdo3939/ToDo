interface SelectionProps {
    checked: boolean
}

export default function Selection(props: SelectionProps) {

    const gradient = props.checked ?
        'bg-gradient-to-br from-blue-300 to-blue-900' : 'bg-gray-300'

    return (
        <div className={
            `h-7 w-7 flex items-center justify-center border rounded-full cursor-pointer m-2 text-white
            ${gradient} `
        }>
            {props.checked ? <span>x</span> : ''}
        </div>
    )
}