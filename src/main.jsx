import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import App from "./App.jsx";
import TaskPage from "./pages/taskPage.jsx";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/Tasks",
    element: <App/>,
  },
  {
    path: "/Tasks/:id",
    element: <TaskPage />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

