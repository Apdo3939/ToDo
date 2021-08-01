import { useState } from "react"
import ToDo from '../model/ToDo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

interface FormAddTaskProps {
    handleTaskCreated: (task: ToDo) => void
}

export default function FormAddTask(props: FormAddTaskProps) {

    const [description, setDescription] = useState('')

    function handleCreateNewTask() {
        console.log('tarefa criada')
        if (description?.trim().length > 0) {
            const newtask = ToDo.activetask(Math.random(), description)
            props.handleTaskCreated(newtask)
            setDescription('')
        }
    }

    return (
        <div className={`flex flex-1 justify-center`}>
            <input
                className={`border-blue-700 border-2 focus:outline-none focus:ring-2 w-1/2 rounded-lg text-xl
                focus:ring-blue-700 px-3 py-2`}
                placeholder='informe sua próxima tarefa'
                type='text'
                value={description}
                onChange={e => setDescription(e.target.value)}
                onKeyDown={e => e.key === 'Enter' ? handleCreateNewTask() : false} />
            <button
                onClick={handleCreateNewTask}
                className={`ml-3 bg-blue-700 px-3 py-1 text-white font-semibold
                text-xl focus:outline-none rounded-lg cursor-pointer`}>
                    <FontAwesomeIcon icon={faPlus} />
            </button>
        </div>
    )
}