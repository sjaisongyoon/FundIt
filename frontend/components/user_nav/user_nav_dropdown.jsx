import React from 'react';
import { logout } from '../../actions/session_actions';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';



class UserNavDropdown extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        e.preventDefault();
        // debugger
        this.props.logout()
            .then(this.props.closeModal)
        this.props.history.push('/login');
    }

    render(){
        return (
            <div className="dropdown-content-show">
                <div>
                    <input className="greeting-dropdown-elements" type="submit" value="Log Out!" onClick={this.handleClick} /> 
                </div>
            </div>
        )
    }

};

const mapStateToProps = ({ entities, session }) => {
    return {
        currentUser: entities.users[session.id]
    };
};

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout())
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserNavDropdown));
