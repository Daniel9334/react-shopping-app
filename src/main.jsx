import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import "./index.css";
import DashboardContent from "./components/DashboardContent/DashboardContent.jsx";
import SignIn from "./components/SignIn/SignIn.jsx";
import SignOut from "./components/SignOut/SignOut.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import { ProductsProvider } from "./context/productsContext.jsx";
import { useEffect } from "react";

const RedirectToDashboard = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/dashboard");
  }, [navigate]);

  return null;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <RedirectToDashboard />,
  },
  {
    path: "/signIn",
    element: <SignIn />,
  },
  {
    path: "/signOut",
    element: <SignOut />,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <App />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "",
        element: <DashboardContent />,
      },
    ],
  },
]);

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(
  <ProductsProvider>
    <RouterProvider router={router} />
  </ProductsProvider>
);
