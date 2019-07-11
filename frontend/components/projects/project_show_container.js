import { connect } from 'react-redux';
import { fetchProject, updateProject } from '../../actions/project_actions';
import { fetchRewards } from '../../actions/reward_actions';
import ProjectShow from './project_show';

const mapStateToProps = (state, ownProps) => {
    return {
        project: state.entities.projects[ownProps.match.params.projectId] || {},
        author: state.entities.users.author || {},
        currentUser: state.entities.users[state.session.id] || {},
        rewards: Object.values(state.entities.rewards).filter(reward => reward.projectId == ownProps.match.params.projectId)
    }
};

const mapDispatchToProps = dispatch => ({
    fetchProject: projectId => dispatch(fetchProject(projectId)),
    updateProject: project => dispatch(updateProject(project))
});


export default connect(mapStateToProps, mapDispatchToProps)(ProjectShow)