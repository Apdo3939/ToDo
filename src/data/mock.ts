import FilterEnum from "../model/FilterEnum";
import ToDo from "../model/ToDo";
import ToDoList from "../model/ToDoList";

const toDoMock: ToDo[] = [
    ToDo.activetask(1, 'Jogar Final fantasy 15 a tarde'),
    ToDo.activetask(2, 'Ir a faculdade hoje as 18:00 horas'),
    ToDo.activetask(3, 'Terminar o curso em três meses'),
    ToDo.taskCompleted(4, 'Assistir futebol feminino'),
]

export default new ToDoList(toDoMock, FilterEnum.ALL)