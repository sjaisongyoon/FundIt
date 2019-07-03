import React from 'react';
import {Link} from 'react-router-dom'

const Greeting = ({currentUser, logout}) => {

    const handleClick = (e) => {

    }

    if(currentUser){
        return (
            <div className="greeting-message greeting-dropdown">
                <input className="greeting-dropdown-input" type="submit" value={currentUser.name} onClick={handleClick}/>
                <div className="dropdown-content">
                    <input className="greeting-dropdown-elements" type="submit" onClick={logout} value="Log Out!"/>
                </div>
                {/* <div>Welcome {currentUser.name}</div> */}
                {/* <button onClick={logout}>Logout!</button> */}
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