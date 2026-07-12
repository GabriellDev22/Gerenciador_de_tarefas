import "../App.css";
import TaskList from "./ui/TaskList";
import CreateTask from "./ui/CreateTask";
function Tasks(props) {
  return (
    <div className=" mt-10 ">
      <div className=" w-80 lg:w-150 ">
        <ul className="bg-slate-900 space-y-4  p-6 flex flex-col rounded-md shadow">
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
              apagarTask={() =>{
                props.apagarTask(task.id)
              }}

              
            >
              {task.title}
            </TaskList>
          ))}
          
          <CreateTask></CreateTask>
          
        </ul>
      </div>
    </div>
  );
}
export default Tasks;
