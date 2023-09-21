import React from 'react';
import ReactDOM from 'react-dom/client';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from './pages/Login';
import Dashboard from './Dashboard';
import CadastroUsuario from "./pages/CadastroUsuario";
import ErroPage from './pages/ErroPage';
import App from './pages/App';
import CadastroProduto from './pages/CadastroProduto';
import "./App.css";

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#b17fea',
      light: '#8b8bcb',
      dark: '#3a3a4e',
    },
    secondary: {
      main: '#d6afef',
      light: '#b3bbe8',
      dark: '#a4c0e4',
    },
    error: {
      main: '#efb3d1',
      light: '#efb3d1',
      dark: '#efb3d1',
    },
    warning: {
      main: '#a5afe0',
      dark: '#8089b1',
      light: '#8ba3f3',
    },
    info: {
      main: '#9c82ef',
      dark: '#161a64',
      light: '#9c84f1',
    },
    success: {
      main: '#8bbfb6',
      light: '#3a9c86',
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErroPage />
  },
  {
    path: "/cadastro",
    element: <CadastroUsuario />,
    errorElement: <ErroPage />
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children:[
      {
        path: "produtos",
        element: <App />
      },
      {
        path: "cadastro/produto",
        element: <CadastroProduto />
      },
      {
        path: "editar/produto/:id",
        element: <CadastroProduto />
      },
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
  </ThemeProvider>
);
