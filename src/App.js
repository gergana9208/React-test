import MainHeader from "./Pages/MainHeader";
import "./components/UI/Card.css";
import { Route, Routes, BrowserRouter} from "react-router-dom";
import Demos from './components/Demos/Demos'
import NewDemo from "./components/NewDemo/NewDemo";
import DemoItem from "./components/Demos/DemoItem";
import { useState } from "react";

const DUMMY_EXPENENSES = [
  {
    id: "e1",
    title: "telephone",
    sport: "football",
    description: "jdisjfsdion fdivjdjv fjidfjso",
    amount: "45.34",
    date: new Date(2020, 45, 34),
  },
  {
    id: "e2",
    title: " fridge",
    sport: "football",
    description: "jdisjfsdion fdivjdjv fjidfjso",
    amount: "30.78",
    date: new Date(2019, 4, 12),
  },
];



const App = () => {
  const [demos, setDemos] = useState(DUMMY_EXPENENSES);
  const addDemoHandler = (demo) => {
    setDemos((prevDemos) => {
      return [demo, ...prevDemos];
    });
};
   
 

  return (
    <div className="App">
      <BrowserRouter>
      <MainHeader />
      


      <Routes>
                  <Route path="/demos"element={<Demos/>} exact/>
                  <Route path="/newdemo"element={<NewDemo/>} exact/>
            </Routes>
    
      </BrowserRouter>
    </div>
  );
};

export default App;
