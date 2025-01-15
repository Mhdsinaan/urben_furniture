import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Registration from "./pages/Registration";
import Products from "./pages/Products";
import Bedroom from "./pages/Bedroom";

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
    element:<Registration />
  },
  {
    path:"/Bedroom",
    element:<Bedroom/>
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
