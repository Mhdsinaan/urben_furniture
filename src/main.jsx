import { createRoot } from "react-dom/client";
import DataProvider from "./context/DataContext";
import "./index.css";
import App from "./App";
import IdContext from "./context/IdContext";

createRoot(document.getElementById("root")).render(
  <IdContext>
    <DataProvider>
      <App />
    </DataProvider>
  </IdContext>
);
