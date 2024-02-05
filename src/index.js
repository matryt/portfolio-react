import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Projects from './Projects';
import Radios from './ProjectsDetails/Radios';
import ContactForm from './components/ContactForm';
import Aliments from './ProjectsDetails/Aliments';
import Rogue from './ProjectsDetails/Rogue';
import Arduino from "./ProjectsDetails/Arduino";
import NotFound from './NotFound';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Tarot from './ProjectsDetails/Tarot';

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
    path: "/projects/python/rogue",
    element: <Rogue />,
  },
  {
    path: "/projects/java/tarot",
    element: <Tarot />,
  },
  {
    path: "/contact",
    element: <ContactForm />,
  },
  {
    path: "/projects/divers/arduino",
    element: <Arduino />
  },
  {
    path: "*",
    element: <NotFound />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
