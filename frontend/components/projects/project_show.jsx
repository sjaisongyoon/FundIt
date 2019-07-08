import React from 'react';
import { Link, Route } from 'react-router-dom';


class ProjectShow extends React.Component {

    constructor(props){
        super(props)
        // this.calcTimeDiff.bind(this)
    }

    componentDidMount(){
        this.props.fetchProject(this.props.match.params.projectId)
    }

    componentDidUpdate(prevProps){
        if (this.props.project.id !== prevProps.project.id){
            this.props.fetchProject(this.props.match.params.projectId)
        }
    }

    calcTimeDiff(endDate){
        let start = new Date();
        let finish = new Date(endDate);

        let diff = finish - start ;
        if (diff < 0 ) return {timeleft: 'This has ended', inc:""}
        let converted = diff/1000/60/60/24
        let days = Math.floor(converted);
        converted = converted % 1;
        let hours = Math.floor(converted * 24);
        converted = converted % 1;
        let minutes = Math.floor(converted * 60);
        converted = converted % 1;
        let seconds = Math.floor(converted * 60); 

        if (days > 0){
            return {timeleft: `${days}`, inc: 'days to go'}
        } else if (hours > 0){
            return { timeleft: `${hours}`, inc: 'hours to go' }
        } else {
            return { timeleft: `${minutes}`, inc: 'minutes to go' }
        }

    }

    render(){
        const project = this.props.project;
        let ratio = (project.amountPledged / project.pledgeGoal);
        let width;
        if(project.pledgeGoal > 0 && ratio > 1){
            width = 100;
        } else if (project.pledgeGoal <= 0){
            width = 0;
        } else {
            width = Math.floor(ratio*100);
        }
        let pledgeBarStyle = {
            width: width+'%'
        }

        let timeDiff = this.calcTimeDiff(project.endDate);
        return (
            <div className="project-display">
                <div className="project-show-background">
                    <div className="project-show-container">
                        <div className='project-title-desc-container'>
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
                                <div className="pledge-amount"> ${project.amountPledged}</div>
                                <div className="pledge-stat-notes">pledged of ${project.pledgeGoal} goal</div>
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
