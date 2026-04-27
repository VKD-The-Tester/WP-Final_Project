// Rendering Related Imports
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// React-Router-DOM Related Imports
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Public Page Imports
import HomePage from "./pages/HomePage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import LoginPage from "./pages/auth/LoginPage.jsx";
import RegisterPage from "./pages/auth/RegisterPage.jsx";
import RoomSearchPage from "./pages/RoomSearchPage.jsx";

// Global Styling Import
import "./index.css";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "*", element: <NotFoundPage /> },
  { path: "/about", element: <AboutPage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/register", element: <RegisterPage /> },
  { path: "/rooms", element: <RoomSearchPage />, children: [] },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
