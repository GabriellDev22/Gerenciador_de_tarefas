//Implementar feature de imp

import { useState } from "react";
import "./App.css";
import Tasks from "./components/Tasks";

function App() {
  //const local = localStorage.setItem("nome", "Gabriel", "idade", "22");
  const get   = localStorage.getItem("idade")
  console.log(get);
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

  function adicionarTask(titulo) {
    const newTask = {
      id: tasks.length + 1,
      title: titulo,
      describe: "",
      completed: false,
    };
    console.log(newTask);
    setTasks([...tasks, newTask]);
  }
  //organizar a estrutura do app, fazer uma navbar interativa e adaptável para mobile, e manter a lista de forma mais centralizada e responsiva
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
            task={tasks}
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
