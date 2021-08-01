interface ContainerProps {
    children: any
}

export default function Container(props: ContainerProps) {
    return (
        <div className={`flex flex-1 justify-center bg-gradient-to-r from-blue-900 via-gray-400 to-red-900`}>
            {props.children}
        </div>
    )
}