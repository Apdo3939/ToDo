interface ContainerProps {
    children: any
}

export default function Container(props: ContainerProps) {
    return (
        <div className={`flex flex-1 justify-center bg-gradient-to-tr from-blue-900 to-red-300`}>
            {props.children}
        </div>
    )
}