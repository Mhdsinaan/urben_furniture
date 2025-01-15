import { createRoot } from "react-dom/client";
import { DataProvider } from "./context/DataContext";
import "./index.css";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <DataProvider>
    <App />
  </DataProvider>
);
