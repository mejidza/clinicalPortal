import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Register } from './pages/register/Register';
import { Authorization } from './pages/authorization/Authorization';
import { Forgotpassword } from './pages/forgotpassword/Forgotpassword';
import { Doctorregister } from './pages/doctorregister/Doctorregister';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Homepage } from './pages/Homepage/Homepage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/registration",
    element: <Register/>,
  },
  {
    path: "/authorization",
    element: <Authorization/>,
  },
  {
    path: "/forgotPassword",
    element: <Forgotpassword/>,
  },
  {
    path: "/home",
    element: <Homepage/>,
  },

  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <RouterProvider router={router} />
    </LocalizationProvider>
  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
