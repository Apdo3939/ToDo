import { useState } from "react"
import Container from "../components/Container"
import FormAddTask from "../components/FormAddTask"
import Header from "../components/Header"
import List from "../components/List"
import mock from "../data/mock"
import ToDo from "../model/ToDo"

export default function Home() {

  const [tasks, setTasks] = useState(mock)

  function handleTaskCreated(newTask: ToDo) {
    setTasks(tasks.addTask(newTask))
  }

  return (
    <div className={`flex flex-col justify-center h-screen `}>

      <Header>
        <FormAddTask handleTaskCreated={handleTaskCreated} />
      </Header>

      <Container>
        <List
          handleChange={newTasks => { setTasks(newTasks) }}
          tasks={tasks} />
      </Container>
    </div>
  )
}
