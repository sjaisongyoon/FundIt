import React from 'react';
import {Link} from 'react-router-dom'

const Greeting = ({currentUser, logout}) => {
    if(currentUser){
        return (
            <div className="greeting-message">
                <div>Welcome {currentUser.name}</div>
                <button onClick={logout}>Logout!</button>
            </div>
        )
    } else {
        return (
            <div className="greeting-links">
                <Link to="/login">Sign In</Link>
                <br/>
                {/* <Link to="/signup">Sign Up</Link> */}
            </div>
        )
    }
}

export default Greeting;