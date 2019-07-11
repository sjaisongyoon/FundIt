import {RECEIVE_REWARD, RECEIVE_ALL_REWARDS} from '../actions/reward_actions'
import {RECEIVE_PROJECT} from '../actions/project_actions'
import { merge } from 'lodash';


const rewardsReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_ALL_REWARDS:
            return merge({}, state, action.payload.rewards);
        case RECEIVE_REWARD:
            return merge( {}, state, {[action.payload.reward.id]: action.payload.reward} )
        case RECEIVE_PROJECT:
            return merge({}, state, action.payload.rewards)
        default:
            return state;
    }
}

export default rewardsReducer;