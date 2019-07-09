import React from 'react';
import { Link, Route } from 'react-router-dom';
import {calcTimeDiff, numberWithCommas, calcWidth} from './project_calcs';


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
        let ratio = (project.amountPledged / project.pledgeGoal);
        let width = calcWidth(ratio, project.pledgeGoal)

        let pledgeBarStyle = {
            width: width+'%'
        }

        let timeDiff = calcTimeDiff(project.endDate);
        return (
            <div className="project-display">
                <div className="project-show-background">
                    <div className="project-show-container">
                        <div className='project-title-desc-container-show'>
                            <h2>{project.title}</h2>
                            <h3>{project.description}</h3>
                        </div>
                        <div className="project-content-container">
                            <figure className="media-container">
                                <img src={project.photo}/>
                                <div className="project-detail-footer-bar">
                                    <div>{project.categoryId}</div>
                                    <div>
                                        <img className="locpin" src={window.images.locPin} />
                                        {project.location}
                                    </div>
                                </div>
                            </figure>
                            <div className="project-stats">
                                <div className="progress-bar-background">
                                    <div className="pledge-status" style={pledgeBarStyle}> </div>
                                </div>
                                <div className="pledge-amount"> ${numberWithCommas(project.amountPledged)}</div>
                                <div className="pledge-stat-notes">pledged of ${numberWithCommas(project.pledgeGoal)} goal</div>
                                <div className="backer-count"> 20 </div>
                                <div className="pledge-stat-notes"> backers</div>
                                <div className="day-counter"> {timeDiff.timeleft}</div>
                                <div className="pledge-stat-notes">{timeDiff.inc} </div>
                                <br/>
                                <button className="back-proj-button">Back This Project</button>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="project-nav">
                    <div className="header-container">
                        <div className="campaign-header">Campaign</div>
                    </div>
                </div>

                <div className="campaign-content-container">
                    <div className="campaign-content">
                        <h2>About</h2>
                        <p>{project.campaign}</p>
                    </div>
                    <div className="author-rewards-container">
                        <div className="author">
                            <h3>{this.props.author.name}</h3>
                            <br/>
                            <div>{this.props.author.biography}</div>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}

export default ProjectShow;
