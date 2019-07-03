import React from 'react';
import GreetingContainer from './greeting/greetiing_container';
import {Route} from 'react-router-dom';
import LoginFormContainer from './greeting/login_form_container'
import SignupFormContainer from './greeting/signup_form_container'
import {AuthRoute, ProtectedRoute} from '../util/route_util';

const App = () => (
    <div>
        <nav className="top-nav">
            <div className="nav-container">
                <span>Explore</span>
                <span>Start A Project</span>
            </div>
            <div className="nav-container-logo" >
                <span> FundIt! </span>
            </div>
            <div className="nav-container"><GreetingContainer/></div>
        </nav>
        <section className="grey-background">
            <AuthRoute path="/signup" component={SignupFormContainer}/>
            <AuthRoute path="/login" component={LoginFormContainer} />
        </section>
        <footer>
            <nav className="bottom-category-nav auth-text">
                <ul>
                    <li>Category 1</li>
                    <li>Category 2</li>
                    <li>Category 3</li>
                    <li>Category 4</li>
                    <li>Category 5</li>
                </ul>
            </nav>
        </footer>
    </div>
);

export default App;