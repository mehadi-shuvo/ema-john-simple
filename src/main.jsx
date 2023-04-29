import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import LogIn from './components/LogIn/LogIn';
import cartProductsLoader from './Loader/productsLoader';
import Checkout from './components/Checkout/Checkout';
import LogOut from './components/LogOut/LogOut';
import UserProvider from './Providers/UserProvider';
import PrivateRoute from './Routes/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path: '/',
        element: <Shop></Shop>
      },
      {
        path:"/orders",
        element: <Orders></Orders>,
        loader: cartProductsLoader
      },
      {
        path: "inventory",
        element: <Inventory></Inventory>
      },
      {
        path: 'checkout',
        element: <PrivateRoute><Checkout></Checkout></PrivateRoute>
      },
      {
        path: "login",
        element: <LogIn></LogIn>
      },
      {
        path: '/signup',
        element: <LogOut></LogOut>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
    <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>,
)
