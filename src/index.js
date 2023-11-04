import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Projects from './Projects';
import Radios from './ProjectsDetails/Radios';
import ContactForm from './components/ContactForm';
import Aliments from './ProjectsDetails/Aliments';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/projects/python/radio",
    element: <Radios />,
  },
  {
    path: "/projects/python/aliments",
    element: <Aliments />,
  },
  {
    path: "/contact",
    element: <ContactForm />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
