import "../App.css";
import TaskList from "./ui/TaskList";
import CreateTask from "./ui/CreateTask";
function Tasks(props) {
  return (
    <div className=" bg-slate-900 rounded-md flex-1 flex relative flex-col max-w-4xl ">

      
      <ul className="bg-slate-900 h-140 lg:h-130   space-y-4 p-6 rounded-md shadow overflow-y-scroll ">
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
