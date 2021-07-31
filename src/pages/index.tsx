import { useState } from "react"
import Container from "../components/Container"
import Header from "../components/Header"
import List from "../components/List"
import mock from "../data/mock"

export default function Home() {

  const [tasks, setTasks] = useState(mock)
  //bg-gradient-to-tr from-blue-900 to-red-300

  return (
    <div className={`flex flex-col justify-center h-screen `}>

      <Header>

      </Header>

      <Container>
        <List
          handleChange={newTasks => { setTasks(newTasks) }}
          tasks={tasks} />
      </Container>
    </div>
  )
}
