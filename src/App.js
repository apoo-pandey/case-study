import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./Header";
import Router from "./Router";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
