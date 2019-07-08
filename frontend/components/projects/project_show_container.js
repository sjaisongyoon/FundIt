import { connect } from 'react-redux';
import { fetchProject } from '../../actions/project_actions';
import ProjectShow from './project_show';

const mapStateToProps = (state, ownProps) => ({
    project: state.entities.projects[ownProps.match.params.projectId] || {},
    author: state.entities.users.author || {}
});

const mapDispatchToProps = dispatch => ({
    fetchProject: projectId => dispatch(fetchProject(projectId))
});


export default connect(mapStateToProps, mapDispatchToProps)(ProjectShow)