import React from 'react';
import GreetingContainer from './greeting/greetiing_container';
import {Route} from 'react-router-dom';
import LoginFormContainer from './greeting/login_form_container';
import SignupFormContainer from './greeting/signup_form_container';
import ProjectIndexContainer from './projects/projects_index_container';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import Modal from './modal/modal';


const App = () => (
    <div>
        <Modal/>
        <nav className="top-nav">
            <section className="nav-container">
                <div>Explore</div>
                <div>Start A Project</div>
            </section>
            <section className="nav-container-logo" >
                <div> FundIt! </div>
            </section>
            <section className="nav-greeting-container"><GreetingContainer/></section>
        </nav>
        
        <AuthRoute path="/signup" component={SignupFormContainer}/>
        <AuthRoute path="/login" component={LoginFormContainer} />
        <Route path="/projects" component={ProjectIndexContainer}/>
        
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