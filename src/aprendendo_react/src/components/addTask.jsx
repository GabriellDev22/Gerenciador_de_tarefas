import { useState } from "react";

function AddTask(props) {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  return (
    <div className="bg-slate-200 rounded-md flex flex-col justify-center mb-2 p-6 shadow ">
      <div className=" flex flex-col gap-2 ">
        <input
          id="titulo"
          className="border rounded-sm px-4 py-2 shadow "
          type="text"
          placeholder="nova tarefa"
          value={titulo}
          onChange={() => setTitulo(event.target.value)}
        ></input>
        <input
          id="descricao"
          className="border rounded-sm px-4 py-2 shadow "
          type="text"
          placeholder="descrição"
          value={descricao}
          onChange={() => setDescricao(event.target.value)}
        ></input>
      </div>
      <div className="flex justify-center mt-5  ">
        <button
          onClick={() =>{
            if(!titulo.trim() || !descricao.trim()){
              return alert('Preencha o titulo e a descricao da tarefa');
            }
            props.adicionarTask(titulo, descricao)
          }}
          className="bg-blue-600 px-3 py-2 w-screen rounded-sm text-white cursor-pointer font-medium hover:bg-blue-500"
        >
          Adicionar
        </button>
      </div>
    </div>
  );
}
export default AddTask;
