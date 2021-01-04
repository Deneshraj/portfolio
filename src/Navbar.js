import React from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends React.Component {
    render() {
        return (
            <div className="nav">
            <div className={this.props.navClass} id="nav">
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
                <Link to="/" className="item"><b>Home</b></Link>
                <Link to="/projects" className="item"><b>Projects</b></Link>
                <Link to="/about" className="item"><b>About</b></Link>
              </div>
              
            </div>
          </div>
        )
    }
}