import React from 'react';
import {Route} from 'react-router-dom';
import ProjectIndexItem from './project_index_item';


class ProjectIndex extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.fetchProjects();
    }

    render(){
        return (
            <div className="index-background">
                <div className="proj-category-header">
                    <div className="proj-categories">
                        Show Me All Projects With Categories
                    </div>
                </div>

                <section className="index-page">
                    <h3>Explore {this.props.projectsWithAuthors.length} projects</h3>
                    <div className="all-projects-container">
                        {this.props.projectsWithAuthors.map( project => (
                            <ProjectIndexItem key={project.id} 
                            project={project}/>
                        ))}
                    </div>
                </section>
            </div>
        )

    }
}

export default ProjectIndex;