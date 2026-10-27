import "../App.css";
import TaskList from "../components/ui/TaskList";
import CreateTask from "../components/ui/CreateTask";
function Tasks(props) {
  return (
    <div className=" bg-slate-900 rounded-md flex-1 flex relative flex-col max-w-4xl ">
      <ul className="bg-slate-900 h-140 lg:h-140 space-y-4 p-6 rounded-md shadow overflow-y-auto scrollbar-thin scrollbar-thumb-slate-700  scrollbar-track-slate-800">
        {
          /*Uso do map para mapear e renderizar todas as tasks recebidas do componente pai*/
          props.task.map((task) => (
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
          ))
        }
      </ul>
      <div className="p-6 absolute bottom-0 w-full ">
        <CreateTask
          adicionarTask={(titulo) => {
            props.adicionarTask(titulo);
          }}
        ></CreateTask>
      </div>
    </div>
  );
}
export default Tasks;
