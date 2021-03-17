import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Wrapper from "./components/Wrapper";
import Portfolio from "./pages/Portfolio";




function App() {
  return (
    <Router>
    <div>
      <Navbar/>
      <Wrapper>
        <Route exact path="/" component={Main}/>
        <Route exact path="/portfolio" component={Portfolio}/>
      </Wrapper>
    </div>
    </Router>
  );
}

export default App;