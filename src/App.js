import MainHeader from "./Pages/MainHeader";
import "./components/UI/Card.css";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Demos from './components/Demos/Demos'
import NewDemo from "./components/NewDemo/NewDemo";




const App = () => {
   
   
 

  return (
    <div className="App">
      <MainHeader>
          
         <Routes>
              <Route path="/demos" component={Demos}> </Route>
              <Route path="/newdemo" component={NewDemo}> </Route>

        </Routes>
     <Demos></Demos>
     <NewDemo></NewDemo>
      </MainHeader>
    </div>
  );
};

export default App;
