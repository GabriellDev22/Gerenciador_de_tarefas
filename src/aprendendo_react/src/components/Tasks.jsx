import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

function Tasks({tasks, taskClick, deletarTask} ) {
  const navigate = useNavigate();
  
  function clickVerDetalhes(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);
  }
  return (
    <ul className=" space-y-4 p-6 bg-slate-200 rounded-md shadow  ">
      {tasks.map((task) => (
        <li key={task.id} className=" flex gap-2 bg-slate-200 rounded-md ">
          <span
            onClick={() => taskClick(task.id)}
            className={`flex pl-3 text-lg text-white bg-slate-800 w-full p-2 rounded cursor-pointer hover:bg-slate-700
            ${task.completed && "line-through"}`}
          >
            {task.title}
          </span>

          <button
            onClick={() => clickVerDetalhes(task)}
            className="bg-slate-800 p-2 rounded flex items-center justify-center cursor-pointer hover:bg-slate-700 text-slate-100 hover:text-slate-300 "
          >
            <ArrowRight />
          </button>

          <button
            onClick={() => deletarTask(task.id)}
            className=" text-white bg-red-500 cursor-pointer rounded-sm p-2  "
          >
            Deletar
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
