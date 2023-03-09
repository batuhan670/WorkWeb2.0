import React from "react";
import './AppStyles.css';
import './styles/CustomColors.css';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from './stores/store'

//import Topline from "./components/topline/Topline.js"
//import logo from './logo.svg';npm

import Navbar from "./components/navbar/Navbar";

import MainPage from "./routes/MainPage";
import Adressbuch from './routes/Adressbuch.js'
import PWaendern from './routes/PWaendern';
import Urlaub from './routes/Urlaub';
import DoctorsNote from './routes/DoctorsNote';
import Login from "./logPortal/UserLogin";


import Footer from './components/footer/Footer';


/*
Fuer eventuelle Sprachspezifikation
const lang = navigator.language;
*/
const Layout = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <header className="App-header">
          <Outlet />
        </header >
        <Footer />
      </div >
    </Provider>
  )
}
const routes = createBrowserRouter([
  {
    element: <Layout />, children: [
      { path: "/", element: <MainPage />, },
      { path: "/addressbuch", element: <Adressbuch />, },
      { path: "/pwaendern", element: <PWaendern />, },
      { path: "/urlaub", element: <Urlaub />, },
      { path: "/doctorsnote", element: <DoctorsNote />, },
      { path: "/login", element: <Login />, },

    ]
  }
]);

export default function App() {
  return (
    <RouterProvider router={routes} />
  );
}