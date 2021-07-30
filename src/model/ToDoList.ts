import FilterEnum from "./FilterEnum";
import ToDo from "./ToDo";

export default class ToDoList {
    #allTasks: ToDo[]
    #useFilter: FilterEnum

    constructor(allTasks: ToDo[], useFilter = FilterEnum.ALL) {
        this.#allTasks = allTasks
        this.#useFilter = useFilter ?? FilterEnum.ALL
    }

    /*get allTasks()  {
        return this.#allTasks
    }*/

    get itens() {
        return this.setFilterIn(this.#allTasks)
    }

    get allTasksQuantity() {
        return this.itens.length
    }

    get useFilter() {
        return this.#useFilter
    }

    filterActiveTasks():ToDoList {
        if (!this.showActiveTasks()) {
            console.log('tarefas ativas')
            return new ToDoList(this.#allTasks, FilterEnum.ACTIVE)
        }
        else {
            console.log('tarefas atuais')
            return this
        }
    }

    filterCompletedTasks():ToDoList {
        if (!this.showCompletedTasks()) {
            return new ToDoList(this.#allTasks, FilterEnum.CONPLETED)
        }
        else {
            return this
        }
    }

    filterRemove() : ToDoList {
        if (!this.showAllTasks()) {
            return new ToDoList(this.#allTasks, FilterEnum.ALL)
        }
        else {
            return this
        }
    }

    showAllTasks(): boolean {
        return this.#useFilter === FilterEnum.ALL
    }

    showActiveTasks(): boolean {
        return this.#useFilter === FilterEnum.ACTIVE
    }

    showCompletedTasks(): boolean {
        return this.#useFilter === FilterEnum.CONPLETED
    }

    addTask(newTask: ToDo): ToDoList {
        const allTask = [...this.#allTasks]
        allTask.push(newTask)
        return new ToDoList(allTask, this.useFilter)
    }

    updateTask(updateTask: ToDo): ToDoList {
        const allTask = this.#allTasks.map(task =>{
            return task.id === updateTask.id ? updateTask : task
        })
        return new ToDoList(allTask, this.useFilter)
    }

    removeCompletedTasks(){
        const tasksActive = this.#allTasks.filter(task => task.active)
        return new ToDoList(tasksActive, FilterEnum.ALL)
        
    }

    private setFilterIn(toDo: ToDo[]): ToDo[] {
        if (this.showActiveTasks()) {
            return this.setFilterActive(toDo)
        }
        else if (this.showCompletedTasks()) {
            return this.setFilterCompleted(toDo)
        }
        else {
            return [...toDo]
        }
    }

    private setFilterActive(toDo: ToDo[]): ToDo[] {
        return toDo.filter(toDo => toDo.active)
    }

    private setFilterCompleted(toDo: ToDo[]): ToDo[] {
        return toDo.filter(toDo => toDo.completed)
    }
}