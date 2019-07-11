import { combineReducers } from 'redux';
import projectsReducer from './projects_reducer';
import usersReducer from './users_reducer';
import rewardsReducer from './rewards_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    projects: projectsReducer,
    rewards: rewardsReducer
});

export default entitiesReducer;