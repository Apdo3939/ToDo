export default class ToDo {

    #id: number
    #description: string
    #conclusion: boolean

    constructor(id: number, description: string, conclusion: boolean) {
        this.#id = id
        this.#description = description
        this.#conclusion = conclusion
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

    get conclusion() {
        return this.#conclusion
    }

    changeStatus() {
        return this.#conclusion ? this.setActivetask() : this.setTaskCompleted()
    }

    setTaskCompleted() {
        return ToDo.taskCompleted(this.id, this.description)
    }

    setActivetask() {
        return ToDo.activetask(this.id, this.description)
    }
}