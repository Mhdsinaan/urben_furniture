import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Products from "./pages/Products";
import Bedroom from "./pages/Bedroom";
import Dining from "./pages/Dining";
import Livingroom from "./pages/Livingroom";
import Decor from "./pages/Decor";
import ProductDetails from "./pages/ProductDetails";
import Login from "./pages/LogIn";
import Register from "./pages/Register";



const rout = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path:"/products",
        element: <Products />
      }
    ],
  },
  {
    path:"/register",
    element:<Register />
  },
  {
    path:"/Login",
    element:<Login/>

  },

  {
    path:"/Bedroom",
    element:<Bedroom/>
  },
  {
    path:"/Dining",
    element:<Dining/>
  },
  {
    path:"/Livingroom",
    element:<Livingroom/>
  },
  {
    path:"/Decor",
    element:<Decor/>
  },
  {
    path:"/Dining/ProductDetails/:id",
    element:<ProductDetails/>
  },
  {
    path:"/Decor/ProductDetails/:id",
    element:<ProductDetails/>
  },
  {
    path:"/Livingroom/ProductDetails/:id",
    element:<ProductDetails/>
  },
  {
    path:"/Bedroom/ProductDetails/:id",
    element:<ProductDetails/>
  }
]);

function App() {
  return (
    <>
        <RouterProvider router={rout} />
      
    </>
    
  );
}

export default App;
