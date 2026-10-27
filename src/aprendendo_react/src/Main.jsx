import { StrictMode } from "react";
import "./App.css";
import { createRoot } from "react-dom/client";
import { App } from "./App.jsx";
import {TaskPage} from "./pages/taskPage.jsx";
import {createBrowserRouter, RouterProvider, } from "react-router";



const router = createBrowserRouter([
  {
    path: "/inicio",
    element: <App/>,
  },
  {
    path: "/task",
    element: <TaskPage/>
  },
]);


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div>
       <RouterProvider router={router}/>
    </div>
  </StrictMode>
);