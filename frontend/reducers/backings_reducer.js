import { RECEIVE_BACKING } from '../actions/backing_actions';
import {RECEIVE_PROJECT} from '../actions/project_actions'

const backingsReducer = (state={}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_BACKING:
            return Object.assign({}, state, {[action.backing.id]: action.backing})
        case RECEIVE_PROJECT:
            return Object.assign({}, state, action.payload.backings);
        default:
            return state;
    }
}

export default backingsReducer;