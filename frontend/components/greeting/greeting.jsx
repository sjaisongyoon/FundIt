import React from 'react';
import {Link} from 'react-router-dom'


class Greeting extends React.Component {
    constructor(props){
        super(props);
        // this.state = {
        //     clicked: false
        // }
        // this.handleClick = this.handleClick.bind(this)
    }

    // handleClick(e){

    //     e.preventDefault();
    //     // if (this.state.clicked && e.target.value === "Log Out!"){
    //     //     this.setState({
    //     //         clicked: false
    //     //     });
    //     //     this.props.logout()
    //     // } 
    //     if (this.state.clicked) {
    //         this.setState({
    //             clicked: false
    //         });
    //     } else {
    //             this.setState({
    //             clicked: true
    //         });
    //     }
    // }

    render(){
        const {currentUser, logout} = this.props
        // let className = this.state.clicked ? "dropdown-content-show" : "dropdown-content-hidden";
        if (currentUser) {
            return (
                <div className="greeting-message greeting-dropdown">
                    <input className="greeting-dropdown-input" type="submit" value={currentUser.name}/>
                    <span className="dropdown-content">
                        <div>
                            <input className="greeting-dropdown-elements" type="submit" value="Log Out!" onClick={logout} />
                        </div>
                    </span>
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