import React from 'react';

class Error404 extends React.Component {
    render() {
        return (
            <div className="error">
                <h1 style={{textAlign: "center", fontSize: 2 + "rem"}}>The requested page is not found!</h1>
            </div>
        )
    }
}

export default Error404;