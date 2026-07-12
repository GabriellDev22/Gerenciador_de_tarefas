import { useState } from "react";

function CreateTask() {
    

  const [input, setInput] = useState(false);
  function abrirInput() {
    console.log('mudança de estado')
    setInput(true);
  }

  //Criar funcionalidade de abrir e fechar input
  return (
    <>
      {input ? (
        <input className="text-white border  pl-2 bg-slate-700 rounded-md " placeholder="adicionar nova task"></input>
      ) : (
        <li
          onClick={abrirInput}
          className="flex items-center gap-2 text-slate-200 bg-blue-700 p-2 rounded-md"
        >
          <span className="w-full text-center">Nova Task +</span>
        </li>
      )}
    </>
  );
}

export default CreateTask;
