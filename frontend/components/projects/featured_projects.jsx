import { connect } from 'react-redux';
import { fetchFeaturedProjects } from '../../actions/project_actions';
import React from 'react';
import {Link} from 'react-router-dom';
import {fundPercent} from './project_calcs';

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
            project7, project8, project9, project10] = this.props.featuredProjectsWithAuthors;
        const projects = this.props.featuredProjectsWithAuthors;

        return(
            <div className="featured-projects-container">
                <section className="top-page">
                    <div className="main-feature">
                        <h4>FEATURED PROJECT</h4>
                        <Link to={`/projects/${project1.id}`}>
                            <img src={project1.photo}/>
                            <h3 className="featured-title">{project1.title}</h3>
                        </Link>
                        <p>{project1.description}</p>
                        <div className="auth">By {project1.authorName}</div>
                    </div>
                    <div className="side-gallery">
                        <h4>RECOMMENDED</h4>
                        <ul className="side-gallery-container">
                            {projects.slice(1,4).map((sideProject, idx) => (
                                <li key={idx} className="side-gallery-project">  
                                        <div className="small-image"> 
                                            <Link to={`projects/${sideProject.id}`}><img src={sideProject.photo} /></Link>
                                        </div>
                                        <div className="small-details">
                                            <Link to={`projects/${sideProject.id}`}><h5>{sideProject.title}</h5></Link>
                                            <div>
                                                <p id="fund-ratio">{fundPercent(sideProject.amountPledged, sideProject.pledgeGoal)}% Funded</p>
                                                <p>By {sideProject.authorName}</p>
                                            </div>
                                        </div> 
                                </li>
                            ))}
                            <li key="first-li">

                            </li>
                            <li key="second-li"></li>
                            <li key="third=li"></li>
                        </ul>
                        <Link className="index-link" to="/"> View More Projects</Link>
                    </div>
                </section>

            </div>
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(FeaturedProjects)