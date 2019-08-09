import { RECEIVE_PROJECTS, 
        REMOVE_PROJECT, 
        RECEIVE_PROJECT,
        RECEIVE_FEATURED_PROJECTS} from '../actions/project_actions';
import { merge } from 'lodash';

const projectsReducer = (state={}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_PROJECTS:
            return merge({}, state, action.payload.projects);
        case RECEIVE_PROJECT:
            return merge({}, state, {[action.payload.project.id]: action.payload.project});
        case REMOVE_PROJECT:
            let new_state = merge({},state);
            delete new_state[action.projectId];
            return new_state;
        default:
            return state;
    }
}

export default projectsReducer;
