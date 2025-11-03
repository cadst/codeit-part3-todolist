import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EditPage from "./pages/EditPage";
import NotFoundPage from "./pages/NotFoundPage";
import RootLayout from "./components/RootLayout";

/*
 mode: data
 https://reactrouter.com/start/data/routing
*/

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/edit", element: <EditPage /> },
      { path: "*", element: <NotFoundPage /> }, // *: wildcard, 모든 잘못된 경로 처리
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
