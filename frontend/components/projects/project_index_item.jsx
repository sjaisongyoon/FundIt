import React from 'react';
import {Route, Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { numberWithCommas, calcWidth, calcTimeDiff} from './project_calcs'

class ProjectIndexItem extends React.Component{
    
    constructor(props){
        super(props)
    }


    render(){
        // debugger;
        const {title, description, authorName, amountPledged, pledgeGoal, 
            endDate, categoryId, location, photo, id} = this.props.project;
        let ratio = pledgeGoal > 0 ? amountPledged/pledgeGoal : 0;
        let width = calcWidth(ratio, pledgeGoal);

        let pledgeBarStyle = {
            width: width + '%'
        }
        let timeDiff = calcTimeDiff(endDate);
        // debugger;
        return (
            <div className="project-item-container">
                <Link to={`/projects/${id}`}>
                    <div className="img-container">
                        <img src={photo}></img>
                    </div>
                    <div className="project-short-description">
                        <h3 className="project-title">{title}</h3>
                        <p className="project-description">{description}</p>
                    </div>
                </Link>
                <div className="project-author-container">
                    <div className="project-author">by {authorName} </div>
                </div>
                
                <div className="index-project-details">
                    <div className="progress-bar-background">
                        <div className="pledge-status" style={pledgeBarStyle}></div>   
                    </div>
                    <div className="pledge-amount pledge-index">${numberWithCommas(amountPledged)} pledged</div>
                    <div className="index-stat-notes">{Math.floor(ratio*100)+"%"} funded</div>
                    <div className="index-stat-notes">{timeDiff.timeleft} {timeDiff.inc}</div>
                    <div className="index-stat-notes loc-cat">
                        <span>categoryId:{categoryId}</span> <span className="loc"><img className="locpin-index" src={window.images.locPin} />{location}</span>
                    </div>
                </div>
            </div>
        )
    }
}


export default ProjectIndexItem;

