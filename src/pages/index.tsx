import { useState } from "react"
import List from "../components/List"
import mock from "../data/mock"

export default function Home() {

  const[tasks, setTasks] = useState(mock)

  return (
    <div className={`flex flex-col justify-center items-center h-screen 
                    bg-gradient-to-tr from-blue-900 to-red-300 `}>
      <List
        handleChange={newTasks => { setTasks(newTasks) }}
        tasks={tasks} />
    </div>
  )
}
