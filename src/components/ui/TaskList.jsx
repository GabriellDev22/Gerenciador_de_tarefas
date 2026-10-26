import { Trash } from "lucide-react";
import { CircleCheckBig } from "lucide-react";
import { Circle } from "lucide-react";
import { MoveRight } from "lucide-react";
function TaskList(props) {
  function soundCompleted() {
    const audio = new Audio("/pop2.mp3");
    audio.currentTime = 0;
    audio.play().catch((error) => {
      console.log(
        "A reprodução foi bloqueada temporariamente pelo navegador:",
        error,
      );
    });
  }
  return (
    <li className="flex items-center gap-2 text-slate-100 bg-slate-700 p-2 rounded-md pl-3  not-lg: lg:text-lg ">
      <span
        onClick={() => {
          if (!props.task.completed) {
            soundCompleted();
          }
          props.taskClick();
        }}
        className={`text-sm lg:text-lg font-bold w-full 
        ${props.task.completed && "line-through"}`}
      >
        <div className="flex gap-3 items-center min-h-11 cursor-pointer">
          {props.task.completed ? (
            <CircleCheckBig size={25} />
          ) : (
            <Circle size={25} />
          )}
          <span className="">{props.children}</span>
        </div>
      </span>
      <button
        //onClick={props.verDescricao}
        className="bg-blue-500 rounded px-3 py-2 cursor-pointer hover:bg-blue-600"
      >
        <MoveRight size={30} />
      </button>
      <button
        onClick={() => {
          props.apagarTask();
        }}
        className="px-3 py-2 bg-red-500 rounded hover:bg-red-600 cursor-pointer"
      >
        <Trash size={30} />
      </button>
    </li>
  );
}

export default TaskList;
