import { StrictMode } from 'react'
import ReactDOM from "react-dom/client";

// import styling
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";

// import React routing components
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import pages that will conditionally render
import App from "./App";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

const router = createBrowserRouter([
  // define routes
  {
    path: "/", 
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "portfolio",
        element: <Portfolio />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      ,
      {
        path: "resume",
        element: <Resume />,
      },
    ],
  },
]);

// added ReactDOM for backward compatibility to create app root
//render RouteProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
