import { RECEIVE_CURRENT_USER,
         RECEIVE_SESSION_ERRORS, 
         RESET_SESSION_ERRORS } from '../actions/session_actions';
import { merge } from 'lodash';


const sessionErrorsReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            let new_state = merge({}, state);
            new_state.session = [];
            return new_state;

        case RECEIVE_SESSION_ERRORS:
            return merge({}, state, action.errors)

        case RESET_SESSION_ERRORS:
            return {};
        default:
            return state;
    }
};

export default sessionErrorsReducer;