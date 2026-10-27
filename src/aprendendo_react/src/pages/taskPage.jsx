import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

//pagina de detalhes da task
function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  return (
    <div className="bg-slate-500 h-screen w-screen">
      <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
        <div className="w-150">
          <div className="flex relative justify-center items-center mb-5 ">
            <button
              onClick={() => navigate(-1)}
              className="absolute top-0 left-0 bottom-0 text-slate-100  p-1 rounded cursor-pointer hover:text-slate-300"
            >
              <ArrowLeft />
            </button>
            <h1 className="text-3xl font-bold text-center text-slate-100 p-3">
              Detalhes da tarefa
            </h1>
          </div>

          <div className="pt-4">
            <div className="py-3 bg-white px-4 rounded-md">
              <h2 className="text-slate-600 text-2xl font-bold">{title}</h2>
              <p className="py-2 px-2 text-slate-600 text-xl">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export { TaskPage };
