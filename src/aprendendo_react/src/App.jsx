import { createRoot } from "react-dom/client";
import AddTask from "./components/addTask";
import Tasks from "./components/Tasks";
import { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks") || '[]' ),
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(()=>{
    async function ApiTasks(){
      const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10',
        {
          method: 'GET',

        }
      )
      const data = await response.json();
      setTasks(data)
    }
    ApiTasks()
  }, [])

  //atualizar estado da função tasks?
  function taskClick(taskId) {
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

  //Ao chegar em casa criar função apagar a tarefa
  function deletarTask(taskId) {
    const deleteTask = tasks.filter((task) => task.id !== taskId);
    setTasks(deleteTask);
  }

  function adicionarTask(titulo, descricao) {
    const newTask = {
      id: tasks.length + 1,
      title: titulo,
      description: descricao,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-125">
        <h1 className="text-3xl font-bold text-center text-slate-100 p-3">
          Gerenciador de tarefas
        </h1>
        <div className="py-3">
          <AddTask adicionarTask={adicionarTask} />
        </div>
        <div>
          <Tasks
            tasks={tasks}
            taskClick={taskClick}
            deletarTask={deletarTask}
          />
        </div>
      </div>
    </div>
  );
}

export { App };
