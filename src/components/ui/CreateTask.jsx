import { Plus } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { MoveRight } from "lucide-react";

function CreateTask(props) {
  const [inputAberto, setInputAberto] = useState(false);
  const [input, setInput] = useState("");
  const inputRef = useRef(null);

  function popSoundAddTask() {
    const audio = new Audio("/pop1.mp3");
    audio.currentTime = 0;
    audio.play().catch((error) => {
      console.log(
        "A reprodução foi bloqueada temporariamente pelo navegador:",
        error,
      );
    });
  }
  
  function abrirInput() {
    setInputAberto(true);
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  function fecharInput() {
    setInputAberto(false);
  }
// eslint-disable-next-line react-hooks/exhaustive-deps
  function adicionarTask() {
    if (props.adicionarTask && input.trim() !== "") {
      props.adicionarTask(input);
      setInput("");
      popSoundAddTask();
    }
  }

  useEffect(() => {
    function keyDownOpen(event) {
      if (event.key === "Enter") {
        abrirInput();
      }
    }
    document.addEventListener("keydown", keyDownOpen);

    if (inputAberto === true) {
      inputRef.current.focus();

      function mouseDownClose(event) {
        //Clique fora
        if (!event.target.closest(".inputAddTask")) {
          fecharInput();
          adicionarTask();
        }
      }
      function keyDownClose(event){
        if (event.key === "Enter") {
          fecharInput();
          adicionarTask();
        }
        if(event.key === "Escape"){
          fecharInput();
          setInput("");
        }
      }

      document.addEventListener("keydown", keyDownClose);
      document.addEventListener("mousedown", mouseDownClose);

      return () => {
        document.removeEventListener("keydown", keyDownOpen);
        document.removeEventListener("mousedown", mouseDownClose);
        document.removeEventListener("keydown", keyDownClose);
        document.removeEventListener("keydown", keyDownClose);
        
      };
    }
  }, [inputAberto, fecharInput, adicionarTask]);

  return (
    //
    <div>
      {inputAberto ? (
        <div className="inputAddTask min-w-full relative flex items-center justify-end rounded-md bg-slate-700 focus:">
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
            className=" absolute cursor-pointer bg-blue-500 px-2 py-2 mr-2 rounded-3xl text-white hover:bg-blue-600  "
          >
            <MoveRight size={30} />
          </div>
        </div>
      ) : (
        <li
          onClick={() => setInputAberto(true)}
          className="flex items-center min-w-full  bg-blue-600 p-2 rounded-md cursor-pointer hover:bg-blue-500"
        >
          <div className="flex items-center justify-between min-w-full p-2 relative">
            <span className=" text-slate-100 text-lg font-bold">
              Adicionar nova tarefa
            </span>
            <span className="text-slate-100 font-bold">
              <Plus size={30} />
            </span>
          </div>
        </li>
      )}
    </div>
  );
}

export default CreateTask;
