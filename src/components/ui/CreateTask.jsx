import { useState } from "react";
import { useEffect } from "react";
function CreateTask(props) {
  const [inputAberto, setInputAberto] = useState(false);
  const [input, setInput] = useState("");
  function abrirInput() {
    setInputAberto(true);
  }
  function fecharInput() {
    setInputAberto(false);
    adicionarTask();
  }
  function adicionarTask() {
    if (props.adicionarTask && input.trim() !== "") {
      props.adicionarTask(input);
      setInput("");
    }
  }

  //Sempre que o input mudar estado, executa!
  useEffect(() => {
    function cliqueFora(event) {
      if (inputAberto && !event.target.closest(".inputAddTask")) {
        fecharInput();
      }
    }
    document.addEventListener("mousedown", cliqueFora);
    //Quando o o estado do input for false, remove o EventListener para economizar na memoria e reduzir acumulo de chamadas
    return () => {
      document.removeEventListener("mousedown", cliqueFora);
    };
  }, [inputAberto, input, props]);

  return (
    //
    <div className="">
      {inputAberto ? (
        <div className="inputAddTask relative flex items-center justify-end rounded-md bg-slate-700 ">
          <input
            type="text"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            className="text-slate-100 text-lg font-bold mr-15 outline-none w-full p-4 rounded-md"
            placeholder="Nova task+"
          ></input>
          <div
            onClick={fecharInput}
            className=" absolute cursor-pointer bg-blue-600 px-4 py-2 mr-2 rounded text-white"
          >
            Adicionar
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
