import ToDoList from "../model/ToDoList";
import ListFooter from "./ListFooter";
import ListItems from "./ListItems";

interface Listprops {
    tasks: ToDoList
    handleChange: (tasks: ToDoList) => void
}


export default function List(props: Listprops) {

    const { tasks } = props

    function rendertasks() {
        return tasks.itens.map(task => {
            return (
                <ListItems
                    key={task.id}
                    completed={task.completed}
                    value={task.description}
                    changeStatus={() => {
                        const taskChanged = task.changeStatus()
                        const newListtask = tasks.updateTask(taskChanged)
                        props.handleChange(newListtask)
                    }} />
            )
        })
    }

    return (
        <div className={`flex w-3/5 items-start relative`}>
            <ul className={`absolute -top-20 w-full list-none shadow-lg rounded-xl 
             bg-gradient-to-r from-gray-400 via-gray-300 to-gray-400`}>
                 
                {rendertasks()}

                <ListFooter
                    tasks={props.tasks}
                    handleChange={props.handleChange} />

            </ul>
        </div>
    )
}