import { connect } from 'react-redux';
import { fetchProject, updateProject } from '../../actions/project_actions';
import { fetchRewards } from '../../actions/reward_actions';
import {createBacking} from '../../actions/backing_actions';
import ProjectShow from './project_show';

const projectBackings = (state, projectId) => {
    // debugger;
    return Object.values(state.entities.backings).filter(backing =>
        state.entities.rewards[backing.rewardId].projectId == projectId
        // let rewards = Object.values(state.entities.rewards).filter(reward => reward.id === backing.rewardId)
        // rewards[0].projectId === projectId
    );
    
}

const mapStateToProps = (state, ownProps) => {
    return {
        project: state.entities.projects[ownProps.match.params.projectId] || {},
        author: state.entities.users.author || {},
        currentUser: state.entities.users[state.session.id] || {},
        rewards: Object.values(state.entities.rewards).filter(reward => reward.projectId == ownProps.match.params.projectId),
        backings: projectBackings(state, ownProps.match.params.projectId)
    }
};

const mapDispatchToProps = dispatch => ({
    fetchProject: projectId => dispatch(fetchProject(projectId)),
    updateProject: project => dispatch(updateProject(project)),
    createBacking: backing => dispatch(createBacking(backing))

});


export default connect(mapStateToProps, mapDispatchToProps)(ProjectShow)