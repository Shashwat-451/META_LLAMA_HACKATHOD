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
import Guidelines2 from "./pages/Guidelines";

import GuidelinePage from "./pages/GuidelinePage";
import Guidelines from "./pages/Guidelines";
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
        <Route path="/guidelinePage" element={<GuidelinePage/>} />
        <Route path="/guideline2" element={<Guidelines/>} />
        <Route path="/guideline2" element={<Guidelines/>} />
      </Routes>
    </>
   
  );
}

export default App;
