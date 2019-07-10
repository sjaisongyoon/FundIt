import { connect } from 'react-redux';
import { fetchFeaturedProjects } from '../../actions/project_actions';
import React from 'react';

const featuredProjectsWithAuthors = state => {
    return Object.values(state.entities.projects).map((project) => {
        let author = state.entities.users[project.authorId];
        return Object.assign({}, project, { authorName: author.name })
    });

}

const  mapStateToProps = state => ({
    featuredProjectsWithAuthors: featuredProjectsWithAuthors(state)
})

const mapDispatchToProps = dispatch => ({
    fetchFeaturedProjects: () => dispatch(fetchFeaturedProjects())
})

class FeaturedProjects extends React.Component {
    
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchFeaturedProjects();
    }

    render(){
        if(this.props.featuredProjectsWithAuthors.length <= 0) return <div></div>
        const [project1, project2, project3, project4, project5, project6,
            project7, project8, project9, project10] = this.props.featuredProjectsWithAuthors

        return(
            <div className="featured-projects-container">
                <section className="top-page">
                    <div className="main-feature">
                        <h4>FEATURED PROJECT</h4>
                        <img src={project1.photo}/>
                        <h3 className="featured-title">{project1.title}</h3>
                        <p>{project1.description}</p>
                        <div className="auth">By {project1.authorName}</div>

                    </div>
                    <div className="side-gallery">
                        <ul className="side-gallery-container">
                            <li key="first-li"></li>
                            <li key="second-li"></li>
                            <li key="third=li"></li>
                        </ul>
                    </div>
                </section>

            </div>
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(FeaturedProjects)