import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import * as APIProject from './util/project_util';
import configureStore from './store/store';
import {receiveProjects} from './actions/project_actions'



document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    window.fetchProjects = APIProject.fetchProjects;
    window.fetchProject = APIProject.fetchProject;
    window.createProject = APIProject.createProject;
    window.updateProject = APIProject.updateProject;
    window.deleteProject = APIProject.deleteProject;

    window.receiveProjects = receiveProjects;




    ReactDOM.render(<Root store={store}/>, root);
})