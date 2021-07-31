interface HeaderProps{
    children: any
}

export default function Header(props:HeaderProps){
    return(
        <div className={" flex h-1/3 bg-img-tasks bg-no-repeat bg-cover"}>
            
            <div className={`flex flex-1 h-full justify-center items-center
            bg-gradient-to-r from-blue-700 via-transparent to-red-700`}>
                
                {props.children}
            </div>
        </div>
    )
}