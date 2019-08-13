import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import { CategoryFooter } from '../categories/category_footer';


const SessionFooterText = ({path}) => {
    if (path === '/login'){
       return (
           <div className="auth-form-footer-text" >
                New To FundIt!? <Link to='/signup'> Signup!</Link>
            </div>
       )
    } else {
        return (
            <div className="auth-form-footer-text" >
               Already Have An Account? <Link to='/login'>Login</Link>
            </div>
        ) 
    }
}

class SessionForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        const user = Object.assign({}, this.state);
        if (!this.props.nextPath || this.props.nextPath === '/login' || this.props.nextPath === '/signup' ){
            this.props.processForm(user)
                .then(() => this.props.history.push('/'))
        } else {
            this.props.processForm(user)
                .then( () => this.props.history.push(this.props.nextPath))
        }
    }

    update(field){
        return e => this.setState({
            [field]: e.target.value
        })
    }

    handleDemoSubmit(e){
        e.preventDefault();
        let demoEmail = 'BigFunder@fundIt.com'.split('');
        let demoPassword = 'password'.split('');
        this.setState({
            email: "",
            password: ""
        }, () => this.demoUser(demoEmail, demoPassword))
    }

    demoUser(demoEmail, demoPassword){
        let rate = 50;
        if( demoEmail.length > 0){
            this.setState({
                email: this.state.email += demoEmail.shift()
            }, () => window.setTimeout( () => this.demoUser(demoEmail, demoPassword), rate ))
        } else if ( demoPassword.length > 0){
            this.setState({
                password: this.state.password += demoPassword.shift()
            }, () => window.setTimeout(() => this.demoUser(demoEmail, demoPassword), rate))
            
        } else if (demoPassword.length === 0) {
            // debugger
            if (!this.props.nextPath){
                this.props.processForm(this.state)
                    .then(() => this.props.history.push('/'))
            } else {
                this.props.processForm(this.state)
                    .then(() => this.props.history.push(this.props.nextPath))
            }
        }       
    }

    componentWillUnmount(){
        this.props.resetSessionErrors();
    }

    render(){
        let path = this.props.location.pathname;
        const formType = this.props.formType;

        return(
            <div>
                <div className="grey-background">
                    <div className="login-signup" >
                        <div className="auth-form-container">
                            {formType === 'Login' ? <label>Log In</label> : <label>Sign Up!</label>}

                            <form className="login-signup-form" onSubmit={this.handleSubmit}>
                                {path ==='/login' ? null : <input type="text" value={this.state.name} placeholder="Name" onChange={this.update('name')}/>}
                                <input id='email' type="email" value={this.state.email} placeholder="Email" onChange={this.update('email')}/>
                                <input id='password' type="password" value={this.state.password} placeholder="Password" onChange={this.update('password')}/>
                                <input type="submit" value={formType} className="submit-button"/>
                            </form>

                            {formType === 'Login' ? <div className="demo-button-container">
                                <input type="submit" value="Demo Login" className="submit-button" id="demo" onClick={this.handleDemoSubmit}/>
                                </div> : null}
                            <div className="errors-container"><div className="auth-errors">{this.props.errors[0]}</div></div>
                        </div>
                        <div className="auth-form-footer auth-text">
                            <SessionFooterText path={path}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SessionForm;