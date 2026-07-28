import { useState ,useRef, useEffect } from "react";
function CreateTask(props) {
  const [inputAberto, setInputAberto] = useState(false);
  const [input, setInput] = useState("");
  const inputRef = useRef(null);
  // eslint-disable-next-line react-hooks/exhaustive-deps
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

  //useEffect pensando na renderização ao abrir input e no momento que o mesmo é fechado pelo click fora da div
  // Ao ser fechado, dispara a função que confere se o usuário digitou algo e salva automaticamente
  useEffect(() => {
    if (inputAberto == true) {
      inputRef.current.focus();
      function cliqueFora(event) {
        if (!event.target.closest(".inputAddTask")) {
          //adicionarTask();
          fecharInput();
        }
      }
      document.addEventListener("mousedown", cliqueFora);

      return () => {
        document.removeEventListener("mousedown", cliqueFora);
      };
    }
  }, [inputAberto, fecharInput]);

  return (
    //
    <div className=" ">
      {inputAberto ? (
        <div className="inputAddTask min-w-full relative flex items-center justify-end rounded-md bg-slate-700 focus: ">
          <input
            type="text"
            ref={inputRef}
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
          onClick={() => setInputAberto(true)}
          className="flex items-center min-w-full  bg-blue-600 p-2 rounded-md cursor-pointer hover:bg-blue-500"
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
