import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import Projects from './Projects.js'; 
import About from './About.js'; 
import Index from './main.js';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="nav">
          <div className="nav-sub">
            <button className="responsive-btn" onClick={
              () => {
                let element = document.getElementById("container");
                if(element.style.display === "none" || element.style.display === "") element.style.display = "flex";
                else element.style.display = "none";
              }
            }>
              <i className="fa fa-bars"></i>
            </button>

            <div className="nav-menu-container" id="container">
              <Link to="/" className="item">Home</Link>
              <Link to="/projects" className="item">Projects</Link>
              <Link to="/about" className="item">About</Link>
            </div>
            
          </div>
        </div>

        <Route exact path="/" component={Index} />
        <Route path="/projects" component={Projects} />
        <Route path="/about" component={About} />
      </div>
    </BrowserRouter>
  );
}

export default App;
