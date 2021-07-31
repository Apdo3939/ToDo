import ToDoList from "../model/ToDoList"
import ListButtons from "./ListButtons"

interface ListFooterProps {
    tasks: ToDoList
    handleChange: (tasks: ToDoList) => void
}

export default function ListFooter(props: ListFooterProps) {

    const { tasks, handleChange } = props

    function renderQtItems() {
        return (
            <>
                <span className={`text-blue-300 hidden sm:inline `}>
                    {tasks.allTasksQuantity}
                    {tasks.allTasksQuantity === 0
                        ? ' Nenhuma tarefa encontrada'
                        : tasks.allTasksQuantity === 1
                            ? " Tarefa encontrada" : " Tarefas encontradas"}
                </span>
                <span className={`hidden sm:inline flex-1`}></span>
            </>
        )
    }

    function renderFilter() {
        return (
            <>
                <ListButtons
                    checked={tasks.showAllTasks()}
                    onClick={() => handleChange(tasks.filterRemove())}
                    className="hidden md:inline ml-5">
                    Todas
                </ListButtons>

                <ListButtons
                    checked={tasks.showActiveTasks()}
                    onClick={() => handleChange(tasks.filterActiveTasks())}
                    className="mx-5">
                    Ativas
                </ListButtons>

                <ListButtons
                    checked={tasks.showCompletedTasks()}
                    onClick={() => handleChange(tasks.filterCompletedTasks())}
                    className="hidden md:inline">
                    Completadas
                </ListButtons>
            </>
        )
    }

    function renderRemoveItems() {
        return (
            <>
                 <span className={`flex-grow`}></span>
                <ListButtons
                    checked={tasks.showCompletedTasks()}
                    onClick={() => handleChange(tasks.removeCompletedTasks())}
                    className="hidden md:inline">
                    Excluir
                </ListButtons>
            </>
        )
    }

    return (
        <li className={`flex p-5`}>
            {renderQtItems()}
            {renderFilter()}
            {renderRemoveItems()}
        </li>
    )
}