import { RECEIVE_CURRENT_USER, LOGOUT_USER } from '../actions/session_actions';
import {RECEIVE_PROJECT} from '../actions/project_actions';

const defaultState = { id: null };

const sessionReducer = (state = defaultState, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { id: action.user.id })

        case LOGOUT_USER:
            // return defaultState;
            return Object.assign({}, state, { id: null })

        default:
            return state;
    }
};

export default sessionReducer;