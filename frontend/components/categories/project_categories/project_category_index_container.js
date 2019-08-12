import { connect } from 'react-redux';
import ProjectCategoryIndex from './project_category_index';
import { fetchCategoryProjects } from '../../../actions/project_actions';

//selector for categories
const categoryProjects = (state, categoryId) => {
    return Object.values(state.entities.projects).filter(project =>
        project.categoryId == categoryId
    );
};

const mapStateToProps = (state, ownProps) => {
    let projects = categoryProjects(state, ownProps.match.params.categoryId) 
    let projectsWithAuthors = projects.map(project => {
        let author = state.entities.users[project.authorId];
        return Object.assign({}, project, {authorName: author.name})
    })
    // debugger;
    return {
        projects: projectsWithAuthors,
        category: state.entities.categories[ownProps.match.params.categoryId] || {}
    }
}

const mapDispatchToProps = dispatch => ({
    fetchCategoryProjects: (categoryId) => dispatch(fetchCategoryProjects(categoryId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProjectCategoryIndex)