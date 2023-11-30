import { useRoutes } from "react-router";
import router from "./router";
import { BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  const content = useRoutes(router);

  return <div>{content}</div>;
}

export default App;
