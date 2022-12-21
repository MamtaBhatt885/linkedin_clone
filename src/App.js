import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import { selectUser } from "./userSlice";
import { useSelector } from "react-redux";
import Login from "./Login";


function App() {
  const user = useSelector(selectUser);
  
  return (
    <div className="app"> 
        <Header />
    
      
      {!user ? (<Login />): ( <div className="app__body">
        <Sidebar />
        <Feed />
        {/* widgets */}
      </div>
      )} 
     
    </div>
  );
}

export default App;
