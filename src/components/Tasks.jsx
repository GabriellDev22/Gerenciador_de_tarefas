import "../App.css";
import TaskList from "./ui/TaskList";
import CreateTask from "./ui/CreateTask";
function Tasks(props) {
  return (
    <div className=" bg-slate-900 rounded-md flex-1 flex flex-col   ">
      <ul className="bg-slate-900 flex-1 space-y-4 p-6 rounded-md shadow">
        {/*Uso do map para mapear e renderizar todas as tasks recebidas do componente pai*/}
        {props.task.map((task) => (
          <TaskList
            key={task.id}
            task={task}
            //Passo callbacks contendo a lógica do sistema para o componente filho
            //Cada callback guarda o id da respectiva tarefa
            taskClick={() => {
              props.taskClick(task.id);
            }}
            apagarTask={() => {
              props.apagarTask(task.id);
            }}
          >
            {task.title}
          </TaskList>
        ))}
      </ul>
      <div className="p-6">
        <CreateTask></CreateTask>
      </div>
    </div>
  );
}
export default Tasks;
