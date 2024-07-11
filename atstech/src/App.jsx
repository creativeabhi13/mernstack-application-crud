import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";

function App() {
  return <div >
        <Routes>
          <Route path="/" Component={Home} />
        </Routes>
      </div>;
}

export default App;
