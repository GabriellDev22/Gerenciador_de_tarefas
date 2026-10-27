import { ArrowLeft, Check, Circle } from "lucide-react";
import { useNavigate} from "react-router";

function TaskPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full flex justify-center bg-linear-to-b from-blue-900 via-blue-900 to-blue-950">
      <div className="lg:w-4xl w-full px-4 lg:px-10">

        {/* Cabeçalho */}
        <div className="pt-10 flex items-center gap-3">
          <button
            onClick={() => navigate("/Tasks")}
            className="p-2 rounded-md text-slate-100 hover:bg-blue-800 cursor-pointer transition"
          >
            <ArrowLeft size={26} />
          </button>

          <h1 className="text-4xl font-bold text-slate-100">
            Detalhes da tarefa
          </h1>
        </div>

        <div className="mt-10 bg-slate-700 rounded-md p-6 shadow-lg">

          {/* Título */}
          <h2 className="text-3xl font-bold text-slate-100">
            Título da tarefa
          </h2>

          {/* Status */}
          <div className="flex items-center gap-2 mt-5 text-slate-200">
            <Circle size={20} />
            <span>Não concluída</span>
          </div>

          {/* Separador */}
          <div className="border-t border-slate-600 my-6" />

          {/* Descrição */}
          <div>
            <h3 className="text-xl font-bold text-slate-100 mb-2">
              Descrição
            </h3>

            <p className="text-slate-300 leading-relaxed">
              Descrição da tarefa aparecerá aqui.
            </p>
          </div>

          {/* Ações */}
          <div className="flex gap-3 mt-8">
            <button
              className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600
                         text-slate-100 rounded-md px-4 py-2 cursor-pointer transition"
            >
              <Check size={20} />
              Concluir tarefa
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default TaskPage;