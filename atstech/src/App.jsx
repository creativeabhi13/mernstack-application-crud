import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import User from "./components/Home/User";
import UpdateUser from "./components/Home/UpdateUser";

function App() {
  return <div >
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/:id" element={<User/>} />
          <Route path="/update/:id" element={<UpdateUser/>} />
        </Routes>
      </div>;
}

export default App;
