import { connect } from 'react-redux';
import { fetchProjects } from '../../actions/project_actions';
import ProjectIndex from './project_index';

const projectsWithAuthors = state => {
    return Object.values(state.entities.projects).map( (project) => {
        let author = state.entities.users[project.authorId];
        return Object.assign({} , project, {authorName: author.name})
    });
    
}

const mapStateToProps = (state) =>({
    projectsWithAuthors: projectsWithAuthors(state),
});

const mapDispatchToProps = dispatch =>({
    fetchProjects: () => dispatch(fetchProjects()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectIndex)
