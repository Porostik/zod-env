import ReactDom from "react-dom/client";
import { App } from "./app";

ReactDom.createRoot(document.getElementById("root") as HTMLElement).render(
  <App />
);
