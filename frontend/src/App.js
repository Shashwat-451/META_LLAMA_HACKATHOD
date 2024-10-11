import "./App.css";
import {Routes,Route} from 'react-router-dom'
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import KnowldegeManagement from "./pages/KnowldegeManagement"
import MyFiles from "./pages/MyFiles"
function App() {
  return (
    <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<KnowldegeManagement/>} />
        <Route path="/myFiles" element={<MyFiles/>} />
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
  );
}

export default App;
