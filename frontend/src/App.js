import "./App.css";
import {Routes,Route} from 'react-router-dom'
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import KnowldegeManagement from "./pages/KnowldegeManagement"
import MyFiles from "./pages/MyFiles"
import ReviewDoc from "./pages/ReviewDoc";
import ChunkMode from "./pages/ChunkMode";
import Dashboard from "./pages/Dashboard";
function App() {
  return (
    <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<KnowldegeManagement/>} />
        <Route path="/myFiles" element={<MyFiles/>} />
        <Route path="/myFiles/:id" element={<ReviewDoc/>} />
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/chunkmode" element={<ChunkMode/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
  );
}

export default App;
