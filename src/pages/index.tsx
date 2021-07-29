import ToDo from "../model/ToDo"

export default function Home() {
  let toDo = new ToDo(1, "Estudar next.js", false)
  toDo = toDo.changeStatus()
  toDo = toDo.changeStatus()

  return (
    <div className={`flex flex-col justify-center items-center 
    bg-gradient-to-tr from-blue-900 to-red-300 h-screen`}>
      <span >{toDo.id}</span>
      <span >{toDo.description}</span>
      <span >{toDo.conclusion ? 'Concluida' : 'Ativa'}</span>
    </div>
  )
}
