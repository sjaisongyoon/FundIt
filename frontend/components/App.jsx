import React from 'react';
import GreetingContainer from './greeting/greetiing_container';
import {Route, Switch, Link} from 'react-router-dom';
import LoginFormContainer from './greeting/login_form_container';
import SignupFormContainer from './greeting/signup_form_container';
import ProjectIndexContainer from './projects/projects_index_container';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import Modal from './modal/modal';
import ProjectShowContainer from './projects/project_show_container';
import ProjectFormContainer from './projects/project_form/project_form_container';
import FeaturedProjects from './projects/featured_projects';


const App = () => (
    <div>
        <Modal/>
        <nav className="top-nav">
            <section className="nav-container">
                <Link to={'/projects'}>Explore</Link>
                <Link to={'/projects/start'}>Start A Project</Link>
            </section>
            <section className="nav-container-logo" >
                <Link to="/"><div> FundIt! </div></Link>
            </section>
            <section className="nav-greeting-container"><GreetingContainer/></section>
        </nav>
        
        <Switch>
            <AuthRoute path="/signup" component={SignupFormContainer}/>
            <AuthRoute path="/login" component={LoginFormContainer} />
            <ProtectedRoute path="/projects/start" component={ProjectFormContainer}/>
            <Route path="/projects/:projectId" component={ProjectShowContainer}/>
            <Route exact path="/projects" component={ProjectIndexContainer}/>
            <Route path='/' component={FeaturedProjects}/>
        </Switch>
        
        {/* <footer>
            <nav className="bottom-category-nav auth-text">
                <ul>
                    <li>Category 1</li>
                    <li>Category 2</li>
                    <li>Category 3</li>
                    <li>Category 4</li>
                    <li>Category 5</li>
                </ul>
            </nav>
        </footer> */}
    </div>
);

export default App;