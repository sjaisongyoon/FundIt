import * as APIReward from '../util/reward_util';
export const RECEIVE_REWARD = 'RECEIVE_REWARD';
export const RECEIVE_ALL_REWARDS = 'RECEIVE_ALL_REWARDS';

const receiveReward = (payload) => ({
    type: RECEIVE_REWARD,
    payload
});

const receiveAllRewards = (payload) => ({
    type: RECEIVE_ALL_REWARDS,
    payload
});

export const fetchRewards = (projectId) => dispatch => {
    return APIReward.fetchRewards(projectId)
        .then(payload => dispatch(receiveAllRewards(payload)))
};

export const createReward = (reward) => dispatch => {
    return APIReward.createReward(reward)
        .then(reward => dispatch(receiveReward(reward)))
};