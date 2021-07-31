import ToDoList from "../model/ToDoList";
import ListButtons from "./ListButtons";
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
        <div className={`flex w-3/5`}>
            <ul className={`w-full list-none bg-white shadow-lg p-1 rounded-xl`}>

                {rendertasks()}

                <li className={`list-none p-1`}>
                    <ListButtons
                        onClick={() => { }}
                        checked={true}>
                        <span>Todas</span>
                    </ListButtons>
                </li>
            </ul>
        </div>
    )
}