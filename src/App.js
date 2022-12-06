// import logo from './logo.svg';
import Header from "./Header";
import Intro from "./Intro";
import Swipe from "./Swipe";
import Tutorial from "./Tutorial";
import SwipeButtons from "./Swipe_buttons";
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      {/* <h1>match, Match, MATCH </h1> */}
      {/* signup screen  */}
      {/* <Registration /> */}
      {/* Profile screen */}
      {/* Header */}
      <Router>
        
        <Routes>
        <Route path="/" element={[<Header />,<Intro/>]} />  
        <Route path="/tutorial" element={[<Header />, <Tutorial />]} /> 
        <Route path="/leaderboard" element={[<Header />]} />
        <Route path="/play" element={[<Header />,<Swipe/>]} />
        </Routes>
      {/* <Header /> */}
      {/* tinder clone */}

      {/* buttons below cards */}

      {/* Chaats Screen  */}
      {/* Indvidual chat screen */}
        {/* Match Screen  */}
        
      </Router>
    </div>
  );
}

export default App;
