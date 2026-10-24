import { useEffect, useState } from "react";
import "./App.css";
import Tasks from "./components/Tasks";

function App() {
  const [task, setTask] = useState([]);
  
  useEffect(() => {
    carregarTasks();
  }, []);

  function carregarTasks(){
    //1-consulta
    const tasksSalvas = localStorage.getItem("tasks");
    //2- conversão JSON -> String e atualização do estado caso exista tarefas no localStorage
    if (tasksSalvas) {
      setTask(JSON.parse(tasksSalvas));
    }
  }
  function taskClick(taskId) {
    //Pegar o ID do Task que será sublinhado e montar a lógica que fará ele ser uma task em estado de finalizado!
    const newTask = task.map((task) => {
      if (task.id === taskId){
        return {
          ...task,
          completed: !task.completed,
        };
      }
      return task;
    });
    setTask(newTask);
    localStorage.setItem("tasks", JSON.stringify(newTask));
  }

  function apagarTask(taskId) {
    const deletar = task.filter((task) => taskId !== task.id);
    setTask(deletar);
    localStorage.setItem("tasks", JSON.stringify(deletar));
  }

  function adicionarTask(titulo) {
    const newTask = [
      {
        id: task.length + 1,
        title: titulo,
        describe: "",
        completed: false,
      },
      ...task,
    ];

    setTask(newTask, ...task);
    localStorage.setItem("tasks", JSON.stringify(newTask));
  }

  return (
    <div className="min-h-screen h-full w-full flex justify-center bg-linear-to-b from-blue-900 via-blue-900 to-blue-950 ">
      {/*navbar lateral*/}
      <div></div>
      <div className="lg:pl-10 flex flex-col ">
        <h1 className=" text-4xl font-bold text-center text-slate-100 pt-10">
          Gerenciador de tarefas
        </h1>

        <div className=" flex flex-col flex-1  lg:w-4xl">
          <h2 className=" mt-6 pl-3 mb-2 text-3xl font-bold text-slate-100 ">
            Tarefas
          </h2>
          <Tasks
            task={task}
            taskClick={taskClick}
            apagarTask={apagarTask}
            adicionarTask={adicionarTask}
          />
        </div>
      </div>
    </div>
  );
}
export default App;
