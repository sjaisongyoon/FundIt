import React from 'react';
import {Link} from 'react-router-dom'


class Greeting extends React.Component {
    constructor(props){
        super(props);
 
    }


    render(){
        const {currentUser, logout} = this.props
        if (currentUser) {
            return (
                <div className="greeting-message greeting-dropdown">
                    <input className="greeting-dropdown-input" type="submit" value={currentUser.name} onClick={() => this.props.openModal('userNavDropdown')}/>
                </div>
            )
        } else {
            return (
                <div className="greeting-links">
                    <Link to="/login">Sign In</Link>
                </div>
            )
        }

    }
}

export default Greeting;