import React from 'react';
import { Link } from 'react-router-dom';
import { fundPercent } from '../../projects/project_calcs';
import { CategoryFooter } from '../category_footer';
import CategoryHeader from '../category_header';


class ProjectCategoryIndex extends React.Component {
    
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchCategoryProjects(this.props.match.params.categoryId)
    }

    componentDidUpdate(prevProps){
        if (this.props.category.id !== prevProps.category.id){
            this.props.fetchCategoryProjects(this.props.match.params.categoryId)
        }
    }

    render(){
        if (!this.props.projects.length) return <div></div>
        
        let {category, projects} = this.props
        
        return(
            <div>
                <CategoryHeader />
                <section className="category-desc-container">
                    <article className="category-desc">
                        <h3>{category.categoryName}</h3>
                        <p>{category.description}</p>
                    </article>
                </section>

                <section className="top-page">
                    <div className="main-feature">
                        <h4>FEATURED PROJECT</h4>
                        <Link to={`/projects/${projects[0].id}`}>
                            <img src={projects[0].photo} />
                            <h3 className="featured-title">{projects[0].title}</h3>
                        </Link>
                        <p>{projects[0].description}</p>
                        <div className="auth">By {projects[0].authorName}</div>
                    </div>
                    <div className="side-gallery">
                        <h4>RECOMMENDED</h4>
                        <ul className="side-gallery-container">
                            {projects.slice(1, 4).map((sideProject, idx) => (
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

                <section className="middle-page-featured">
                    <h4>FRESH FAVORITES</h4>
                    <ul>
                        {projects.slice(4, 8).map((rowProject, idx) => (
                            <li key={idx} >
                                <div id="fresh-img">
                                    <Link to={`projects/${rowProject.id}`} style={{ backgroundImage: `url(${rowProject.photo})` }} className="image-link"></Link>
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

            </div>
        )
    }
}

export default ProjectCategoryIndex;