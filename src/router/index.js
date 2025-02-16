import Layout from "@/pages/Layout";// src/pages/Layout
import Login from "@/pages/Login";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/Layout',
    element: <Layout />
  },
  {
    path: '/Login',
    element: <Login />
  }
])

export default router