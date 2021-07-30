export default class ToDo {

    #id: number
    #description: string
    #completed: boolean

    constructor(id: number, description: string, completed = false) {
        this.#id = id
        this.#description = description
        this.#completed = completed
    }

    static taskCompleted(id: number, description: string) {
        return new ToDo(id, description, true)
    }

    static activetask(id: number, description: string) {
        return new ToDo(id, description, false)
    }

    get id() {
        return this.#id
    }

    get description() {
        return this.#description
    }

    get completed() {
        return this.#completed
    }

    get active(){
        return !this.#completed
    }

    changeStatus() {
        return this.#completed ? this.setActivetask() : this.setTaskCompleted()
    }

    setTaskCompleted() {
        return ToDo.taskCompleted(this.id, this.description)
    }

    setActivetask() {
        return ToDo.activetask(this.id, this.description)
    }
}