import { useState } from "react";
import "./App.css";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "acordar 6am",
      describe: "Acordar 6 da manhã todos os dias",
      completed: false,
    },
    {
      id: 2,
      title: "Treinar",
      describe: "Treinar 7 da manhã todos os dias",
      completed: false,
    },
    {
      id: 3,
      title: "estudar",
      describe: "estudar 9 da manhã todos os dias",
      completed: false,
    },
  ]);
  function taskClick(taskId) {
    //Pegar o ID do Task que será sublinhado e montar a lógica que fará ele ser uma task em estado de finalizado!
    const newTask = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          completed: !task.completed,
        };
      }
      return task;
    });
    setTasks(newTask);
  }

  function apagarTask(taskId) {
    const deletar = tasks.filter((task) => taskId !== task.id);
    setTasks(deletar);
  }

  function adicionarTask() {
    console.log("teste function");
  }

  return (
    <div className=" min-h-screen w-screen flex justify-center bg-linear-to-b from-blue-900 via-blue-900 to-blue-950 ">
      <div className="flex flex-col items-center">
        <h1 className=" text-3xl font-bold text-slate-100 pt-10">
          Gerenciador de tarefas
        </h1>
        
        <div>
          <Tasks task={tasks} taskClick={taskClick} apagarTask={apagarTask} adicionarTask={adicionarTask}  />
        </div>
      </div>
    </div>
  );
}

export default App;
