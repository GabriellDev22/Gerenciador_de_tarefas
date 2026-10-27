import { LogIn, UserCircle } from "lucide-react";

function Sidebar() {
  const usuarioLogado = true;

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-blue-950 border-r border-blue-800/50 flex flex-col">
      <div className="px-6 py-6 text-slate-100">
        <h1 className="text-xl font-bold ">gerenciador de tarefas</h1>
        <p className="text-slate-300 text-sm mt-2">
          Gerenciador de tarefas em react
        </p>
      </div>

      {/* Conteúdo da navbar */}
      <nav className="flex-1 mt-2 px-4 text-slate-300 ">
        <ul>
          <li>
            <a href="">Início</a>
          </li>
          <li>
            <a href="">Serviços</a>
          </li>
          <li>
            <a href="">Contato</a>
          </li>
          <li>
            <a href="">Sobre</a>
          </li>
        </ul>
      </nav>

      <div className="p-4 border-t border-blue-800/50">
        {usuarioLogado ? (
          <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-blue-900 transition cursor-pointer">
            <UserCircle size={45} className="text-slate-300" />

            <div className="text-left">
              <p className="text-sm font-semibold text-slate-100">Gabriel</p>

              <p className="text-xs text-slate-400">Ver perfil</p>
            </div>
          </button>
        ) : (
          <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-blue-900 transition cursor-pointer">
            <LogIn size={35} className="text-slate-300" />

            <div className="text-left">
              <p className="text-sm font-semibold text-slate-100">Entrar</p>

              <p className="text-xs text-slate-400">Faça login na sua conta</p>
            </div>
          </button>
        )}
      </div>
    </aside>
  );
}

export default Sidebar;
