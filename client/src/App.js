import { useContext } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import TopBar from "./components/topbar/TopBar"
import { Context } from "./context/Context";
import HomePage from "./pages/HomePage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";


//import { useState } from 'react';
function App() {
  const {user} = useContext(Context)

  return (
      <Router>
        <TopBar />
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/posts' element={<HomePage />}/>
          <Route path='/register' element={ user ? ( <HomePage /> ) :  (<Register />)}/> 
          <Route path='/login' element={ user ? ( <HomePage /> ) :  (<Login />)}/> 
          <Route path='/write' element={ user ? ( <Write /> ) :  (<Register />)}/> 
          <Route path='/settings' element={<Settings />}/>
          <Route path='/post/:postId' element={<Single />}/>
        </Routes>
      </Router>
  );
}

export default App;
