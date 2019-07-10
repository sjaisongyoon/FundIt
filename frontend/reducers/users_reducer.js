import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { merge } from 'lodash';
import { RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_ALL_PROJECTS, RECEIVE_PROJECT, RECEIVE_FEATURED_PROJECTS } from '../actions/project_actions';

const usersReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_ALL_PROJECTS:
            return merge({}, state, action.payload.users)
        case RECEIVE_FEATURED_PROJECTS:
            // debugger;
            return merge({}, state, action.payload.users )
        case RECEIVE_PROJECT:
            return merge({}, state, action.payload.users)
        case RECEIVE_CURRENT_USER:
            return merge({}, state, { [action.user.id]: action.user });
        case RECEIVE_USER:
            return merge( {}, state, {[action.user.id]: action.user} )
        default:
            return state;
    }
};

export default usersReducer;