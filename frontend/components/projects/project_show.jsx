import React from 'react';
import { Link, Route } from 'react-router-dom';
import {calcTimeDiff, numberWithCommas, calcWidth} from './project_calcs';
import RewardItem from '../rewards/reward_project_index_item';
import {CategoryFooter} from '../categories/category_footer'


class ProjectShow extends React.Component {

    constructor(props){
        super(props)
        this.scrollTo = this.scrollTo.bind(this)
    }

    componentDidMount(){
        this.props.fetchProject(this.props.match.params.projectId);
    }

    componentDidUpdate(prevProps){
        if (this.props.project.id !== prevProps.project.id){
            this.props.fetchProject(this.props.match.params.projectId)
        }
        if (this.props.project.amountPledged !== prevProps.project.amountPledged){
            this.props.fetchProject(this.props.project.id)
        }
    }

    scrollTo(e){
        e.preventDefault();
        let element = document.getElementById('rewards-container')
        element.scrollIntoView({
            behavior: "smooth"
        });
    }

    render(){
        const project = this.props.project;
        let ratio = (project.amountPledged / project.pledgeGoal);
        let width = calcWidth(ratio, project.pledgeGoal);
        let rewards = this.props.rewards;
        let pledgeBarStyle = {
            width: width+'%'
        }
        let timeDiff = calcTimeDiff(project.endDate);

        const categories = {
            1: 'Art',
            2: 'Comics & Illustrations',
            3: 'Design & Tech',
            4: 'Film',
            5: 'Food & Craft',
            6: 'Games',
            7: 'Music',
            8: 'Publishing',
        };
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
                                    <div className="category-footnote">
                                        <img className="locpin" src={window.images.compass} />
                                        {categories[project.categoryId]}
                                    </div>
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
                                <div className="backer-count"> {this.props.backings.length} </div>
                                <div className="pledge-stat-notes"> backers</div>
                                <div className="day-counter"> {timeDiff.timeleft}</div>
                                <div className="pledge-stat-notes">{timeDiff.inc} </div>
                                <br/>
                                <button className="back-proj-button"
                                    onClick={this.scrollTo}>
                                    Back This Project</button>

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
                        <div className="rewards-container" id ="rewards-container">
                            <ul className="rewards-list">
                                { !rewards ? null : rewards.map( (reward, idx) => (
                                    <li key={idx}>
                                        <RewardItem reward={reward} project={project} 
                                        currentUser={this.props.currentUser}
                                        updateProject={this.props.updateProject} 
                                        createBacking={this.props.createBacking}
                                        fetchProject={this.props.fetchProject}/>
                                    </li>
                                ))}

                            </ul>
                        </div>
                    </div>
                </div>

                <CategoryFooter/>
            </div>
        )
    }
}

export default ProjectShow;
