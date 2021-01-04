import React from 'react';
import { motion } from 'framer-motion';

class Index extends React.Component {
    render() {
        return (
            <div className="bg">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                        duration: 0.7
                    }}
                    >
                    <h1>Hi, Welcome to my Portfolio</h1>
                    <div className="contact-container">
                        <a href="https://www.linkedin.com/in/denesh-raj-281947177" className="contact"><i className="fab fa-linkedin-in"></i></a>
                        <a href="https://twitter.com/Deneshraj6" className="contact"><i className="fab fa-twitter"></i></a>
                        <a href="https://github.com/Deneshraj/" className="contact"><i className="fab fa-github"></i></a>
                    </div>
                </motion.div>
            </div>
        )
    }
}

export default Index;