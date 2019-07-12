import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) =>{
    return({
    backings: Object.values(state.entities.backings).filter(backing =>
        ownProps.reward.id === backing.rewardId),
    currentUserBacker: Object.values(state.entities.backings).every( backing => 
        ownProps.currentUser.id !== backing.backerId)
    })
};

class RewardProjectIndexItem extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            project: this.props.project,
            reward: this.props.reward,
            currentUser: this.props.currentUser,
            clicked: false,
            pledgeAmount: 0,
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleClick(e){
        e.preventDefault();
        this.setState({
            clicked: true
        })
    }

    update(field){
        return e => (
            this.setState({
                [field]: e.target.value
            })
        )
    }

    handleSubmit(e){
        let updatedProjectAttributes = {
            id: this.state.project.id,
            amount_pledged: (this.state.project.amountPledged + parseInt(this.state.pledgeAmount,10))
        }

        let backing ={reward_id: this.state.reward.id, backer_id: this.state.currentUser.id}
        // debugger;
        this.props.updateProject(updatedProjectAttributes)
            .then(() => this.props.createBacking(backing))
            .then(()=> this.setState({pledgeAmount: 0, clicked: false}))
            .then(() => this.props.fetchProject(this.props.project.id)) 
    
    }

    render(){
        let reward = this.state.reward;
        let project = this.state.project;
        let currentUser = this.state.currentUser;
        let date = new Date(reward.deliveryDate);
        let month = month = date.toLocaleString('default', { month: 'long' });
        let day = date.getUTCDate();
        let year = date.getUTCFullYear();
        let newDate = month + " " + day + " " + year
         
        return(
            
            <div className="reward-item-container">
                {this.state.clicked ? null : <button id="select-reward" onClick={this.handleClick}> Select Reward</button>}
                <div className="reward-label">
                    Pledge ${reward.cost} or more
                </div>
                <div className="reward-name">
                    {reward.title}
                </div>
                <div className="reward-desc">
                    {reward.description}
                </div>
                <div className="ship-details">
                    <div className="del-date">
                        <div className="detail-label">Estimated Delivery</div>
                        <div className="detail-content">{newDate}</div>
                    </div>
                    <div className="ship-loc">
                        <div className="detail-label">Ships To</div>
                        <div className="detail-content">{reward.shipLoc}</div>
                    </div>
                </div>
                <div className="backings-rewards-count">
                    {this.props.backings.length} backers
                </div>
                {!this.props.currentUserBacker ? <div id="pledge-error">You Are Backing This Project</div> : null}
                { !this.state.clicked || !this.props.currentUserBacker ? null : 
                    <form className="pledge-form-container">
                        <div className="container-name"> Pledge Amount </div>
                        <div className="pledge-value">
                            <div className="dollar-sign">$</div>
                            <input type="number" value={this.state.pledgeAmount}
                             min={reward.cost} onChange={this.update('pledgeAmount')}/>
                        </div>
                        <button id="submit-pledge" onClick={this.handleSubmit} disabled={(this.state.pledgeAmount >= reward.cost) && currentUser.id ? false : true}>Continue</button>
                        {currentUser.id ? null : <div id="pledge-error">Must Be Logged In To Make A Pledge</div>}
                        {this.state.pledgeAmount >= reward.cost ? null : <div id="pledge-error">Pledge Amount Must Be Greater Than {reward.cost}</div>}
                    </form> }
                
            </div>
           
        )
    }
}

export default connect(mapStateToProps, null)(RewardProjectIndexItem)

// export default RewardProjectIndexItem;