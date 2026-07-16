import { useState } from "react";
import {useEffect}  from "react";
function CreateTask() {
  const [input, setInput] = useState(false);

  function abrirInput() {
    setInput(true);
  }
  function fecharInput() {
    setInput(false);
  }
  //Sempre que houver mudança no input, execute!
  useEffect(() => {
    function cliqueFora(event){
      //Caso haja mudança a mudança de estado no input e não esteja clicando dentro do input, retorne a function que fecha-o
    if( input && !event.target.closest(".inputAddTask")){
      fecharInput();
    }
  }
  document.addEventListener('mousedown', cliqueFora);
  
  //Quando o o estado do input for false, remove o EventListener para economizar na memoria
  return () =>{
    document.removeEventListener('mousedown', cliqueFora);
  }
}, [input]);


  return (
    //
    <div className="">
      {input ? (
        <div className="inputAddTask relative flex items-center justify-end rounded-md bg-slate-700 ">
          <input
            className="text-slate-100 text-lg font-bold mr-15 outline-none w-full p-4 rounded-md "
            placeholder="Nova task+"
          ></input>
          <div
            onClick={fecharInput}
            className=" absolute cursor-pointer bg-red-600 px-4 py-2 mr-2 rounded text-white"
          >
            X
          </div>
        </div>
      ) : (
        <li
          onClick={abrirInput}
          className="flex items-center  bg-blue-600 p-2 rounded-md cursor-pointer hover:bg-blue-500"
        >
          <div className="flex items-center gap-1 p-2 relative">
            <span className=" text-slate-100 text-lg font-bold ">
              Adicionar nova tarefa
            </span>
            <span className="text-slate-100 font-bold text-lg">+</span>
          </div>
        </li>
      )}
    </div>
  );
}

export default CreateTask;
