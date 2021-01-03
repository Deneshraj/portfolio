import React from 'react';
import Thumbnail from './Thumbnail';
import hforum from './assets/images/anonymous-2755365_1280.jpg';
import pyencryption from './assets/images/security-265130_1280.jpg';
import pysteg from './assets/images/pexels-nicholas-githiri-1068349.jpg';

class Projects extends React.Component {
    render() {
        let projects = [
            {
                link: "https://github.com/Deneshraj/Hackers-Forum",
                image: hforum,
                title: "Hacker's Forum",
                category: "Website for Security Experts."
            },
            {
                link: "https://github.com/Deneshraj/Hackers-Forum",
                image: pyencryption,
                title: "PyEncryption",
                category: "Encryption using Python"
            },
            {
                link: "https://github.com/Deneshraj/Hackers-Forum",
                image: pysteg,
                title: "PySteg",
                category: "Steganography using Python"
            }

        ]

        let i = 0;
        return (
            <div className="projects-container">
                <h1>My Projects</h1>
                <div className="projects">
                    {projects.map(project => {
                       return(
                       <Thumbnail
                        key={i++}
                        link={project.link}
                        image={project.image}
                        title={project.title}
                        category={project.category}
                    />)
                    })}
                    
                </div>
            </div>
        )
    }
}

export default Projects;