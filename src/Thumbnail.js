import React from 'react';
import './App.css';
 
function Thumbnail(props) {
  return (
    <div className="project">
        <a href={props.link} className="project-link">
            <div className="project-image">
                <img src={props.image} alt={props.title} />
            </div>
            <div className="project-contents">
                <div className="project-title"><b>{props.title}</b></div>
                <div className="project-category">{props.category}</div>
            </div>
        </a>
    </div>
  )
}
 
export default Thumbnail;