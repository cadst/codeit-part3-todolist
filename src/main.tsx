import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EditPage from "./pages/EditPage";
import NotFoundPage from "./pages/NotFoundPage";
import RootLayout from "./components/RootLayout";
import ErrorPage from "./pages/ErrorPage";

/*
 mode: data
 https://reactrouter.com/start/data/routing
*/

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />, // 500 오류 로드/렌더링 실패
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/edit", element: <EditPage /> },
      { path: "*", element: <NotFoundPage /> }, // 404 오류 존재하지 않는 URL 접근
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
