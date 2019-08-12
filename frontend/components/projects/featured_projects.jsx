import { connect } from 'react-redux';
import { fetchFeaturedProjects } from '../../actions/project_actions';
import React from 'react';
import {Link} from 'react-router-dom';
import {fundPercent} from './project_calcs';
import {CategoryFooter} from '../categories/category_footer';
import {CategoryHeader} from '../categories/category_header';

const featuredProjectsWithAuthors = state => {
    return Object.values(state.entities.projects).map((project) => {
        let author = state.entities.users[project.authorId] || {};
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
                <CategoryHeader />
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

                        </ul>
                        <Link className="index-link" to="/projects"> View More Projects</Link>
                    </div>
                </section>
                <div className="border-sep"></div>

                <section className="middle-page-featured">
                    <h4>FRESH FAVORITES</h4>
                    <ul>
                        {projects.slice(4,8).map((rowProject,idx) => (
                            <li key={idx} >
                                <div id="fresh-img">
                                    <Link to={`projects/${rowProject.id}`} style={{backgroundImage: `url(${rowProject.photo})`}} className="image-link"></Link>
                                </div>
                                <div id="fresh-details">
                                    <Link id="title-link" to={`projects/${rowProject.id}`}><h5>{rowProject.title}</h5></Link>
                                    <div>
                                        <p>{rowProject.description}</p>
                                        <span>By {rowProject.authorName}</span>
                                    </div>
                                </div> 
                            </li>
                        ))}
                    </ul>
                </section>

                <CategoryFooter/>

            </div>
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(FeaturedProjects)