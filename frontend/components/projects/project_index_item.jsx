import React from 'react';
import {Route} from 'react-router-dom';
import { connect } from 'react-redux';


class ProjectIndexItem extends React.Component{
    
    constructor(props){
        super(props)
    }

    render(){
        // debugger;
        const {title, description, authorName, amountPledged, pledgeGoal, 
            endDate, categoryId, location} = this.props.project;
        let ratio = pledgeGoal > 0 ?  Math.floor((amountPledged / pledgeGoal) * 100) : 0;
        let pledgeBar = { backgroundColor: 'blue', width: Math.floor((amountPledged / pledgeGoal) * 100)}

        return (
            <div className="project-item-container">
                <div>Place holder for photo</div>
                <div className="project-short-description">
                    <div className="project.title">{title}</div>
                    <div className="project-description">{description}</div>
                    <div className="project-author"> {authorName} </div>
                </div>
                
                <div className="status-bar"></div>   
                <div className="index-project-details">
                    <div>{amountPledged}</div>
                    <div>{pledgeGoal > 0 ? Math.floor((amountPledged / pledgeGoal)*100) + "%" : "0%"}</div>
                    <div>{endDate}</div>
                    <div><span>{categoryId}</span> <span>{location}</span></div>
                </div>
            </div>
        )
    }
}


export default ProjectIndexItem;

