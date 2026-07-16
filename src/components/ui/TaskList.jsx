function TaskList(props) {
  return (
    <li className="flex items-center gap-2 text-slate-100 bg-slate-700 p-2 rounded-md pl-3  not-lg: lg:text-lg ">
      <span
        onClick={() => {
          props.taskClick();
        }}
        className={`pl-3 text-sm lg:text-lg font-bold cursor-pointer w-full 
        ${props.task.completed && "line-through"}`}
      >
        {props.children}
      </span>
      <button
        onClick={() => {
          props.apagarTask();
        }}
        className="px-2 py-1 bg-red-500 rounded hover:bg-red-600"
      >
        🗑️
      </button>
    </li>
  );
}

export default TaskList;
