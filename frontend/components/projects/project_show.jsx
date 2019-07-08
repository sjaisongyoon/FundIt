import React from 'react';
import { Link, Route } from 'react-router-dom';


class ProjectShow extends React.Component {

    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchProject(this.props.match.params.projectId)
    }

    componentDidUpdate(prevProps){
        if (this.props.project.id !== prevProps.project.id){
            this.props.fetchProject(this.props.match.params.projectId)
        }
    }

    render(){
        const project = this.props.project;
        // debugger;
        return (
            <div className="project-show-container">
                <div className='project-title-desc-container'>
                    <div>{project.title}</div>
                    <div>{project.description}</div>
                </div>
                <div className="project-content-container">
                    <div className="media-container">
                    {/* image or video here */}
                    </div>
                    <div className="project-stats">

                    </div>
                </div>
                <div className="project-detail-footer-bar">

                </div>

                <div>{this.props.author}</div>
            </div>
        )
    }
}

export default ProjectShow;
