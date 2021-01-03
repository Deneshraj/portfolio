import React from 'react';

class About extends React.Component {
    render() {
        return (
            <div className="about">
                <h1>About Me</h1>
                <p>I am a passionate Software Developer Seeking for oppurtunities to learn more and improve myself.I am a Hard worker and a Passionate learner, always seeking to learn.
                    <br />Then I've developed a Networking Platform for college Students called "Nice Chat" (built using PHP, MySQL, HTML, CSS, JS).
                    <br />After Which, I've developed a Money Tracker to spend and analyse all the payments.(Using Django).I used python because it is easier for data analysis.
                    <br />Then I've developed a Blogging website (Using Node.js, Express.js and MongoDB)
                    <br />Then I've developed a Forum for Cyber Security Enthusiasts using (Django and React)
                    <br />I've also written Encryption and Steganography scripts using python.
                </p>
                <p>
                    <b>Frontend Technologies I Know</b>
                    <ul>
                        <li>React + Redux</li>
                        <li>Bootstrap</li>
                    </ul>
                </p>
                <p>
                    <b>Backend Technologies I Know</b>
                    <ul>
                        <li>Django</li>
                        <li>PHP</li>
                        <li>Node.js</li>
                    </ul>
                </p>
            </div>
        )
    }
}

export default About;