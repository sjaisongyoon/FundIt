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
        const {fetchUser} = this.props
        return (
            <section className="index-page">
                <div className="all-projects-container">
                    {this.props.projectsWithAuthors.map( project => (
                        <ProjectIndexItem key={project.id} 
                        project={project} 
                        fetchUser={fetchUser}/>
                    ))}
                </div>
            </section>
        )

    }
}

export default ProjectIndex;