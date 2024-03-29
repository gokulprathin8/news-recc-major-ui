import BaseComponent from "bootstrap/js/dist/base-component";
import { BrowserRouter } from "react-router-dom";
import CustomRouter from "./components/commons/router";

function App() {
  return (
    <BrowserRouter>
      <CustomRouter />
    </BrowserRouter>
  );
}

export default App;
