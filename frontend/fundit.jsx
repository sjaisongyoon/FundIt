import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import configureStore from './store/store';
import {fetchProjects} from './actions/project_actions';
import {fetchUser} from './actions/user_actions';
import {fetchCategoryProjects} from './actions/project_actions';
import {fetchCategories} from './actions/category_actions';



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
    
    window.dispatch = store.dispatch;
    window.getState = store.getState;

    window.fetchProjects = fetchProjects;
    window.fetchUser = fetchUser;
    window.fetchCategories = fetchCategories;

    ReactDOM.render(<Root store={store}/>, root);
})