import ToDo from "../model/ToDo"
import toDoMock from "../data/mock"

export default function Home() {

  let tasks = toDoMock
  //tasks = tasks.filterRemove()
  //tasks = tasks.filterActiveTasks()
  //tasks = tasks.filterCompletedTasks()
  //tasks = tasks.removeCompletedTasks()
  tasks = tasks.addTask(ToDo.activetask(5,'Jogar video games após a faculdade'))
  const taskUpdate = tasks.itens[2]
  tasks = tasks.updateTask(taskUpdate.changeStatus())
  
  function renderListTasks() {
    return tasks.itens.map(task => {
      return (
        <div key={task.id}>
          <span >{task.id} </span>
          <span > {task.description}</span>
          <span > {task.completed ? 'Completada' : 'Ativa'}</span>
        </div>
      )
    })
  }

  return (
    <div className={`flex flex-col justify-center items-center h-screen
    bg-gradient-to-tr from-blue-900 to-red-300 `}>
      {renderListTasks()}
    </div>

  )
}
