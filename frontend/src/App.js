import "./App.css";
import {Routes,Route} from 'react-router-dom'
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import KnowldegeManagement from "./pages/KnowldegeManagement"
import MyFiles from "./pages/MyFiles"
import ReviewDoc from "./pages/ReviewDoc";
import ChunkMode from "./pages/ChunkMode";
import Dashboard from "./pages/Dashboard";
import LandingPage from "./pages/LandingPage";
import { Navbar } from "flowbite-react";
function App() {
  return (
    <>
    <Navbar/>
     <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/knowledge-management" element={<KnowldegeManagement/>} />
        <Route path="/my-files" element={<MyFiles/>} />
        <Route path="/myFiles/:id" element={<ReviewDoc/>} />
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/chunkmode" element={<ChunkMode/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
    </>
   
  );
}

export default App;
