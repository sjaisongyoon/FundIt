import React from 'react';

class RewardProjectIndexItem extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            project: this.props.project,
            reward: this.props.reward,
            currentUser: this.props.currentUser,
            clicked: false,
            pledgeAmount: 0
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
        this.props.updateProject(updatedProjectAttributes)
            .then(()=> this.setState({pledgeAmount: 0, clicked: false}))

    }

    render(){
        let reward = this.state.reward;
        let project = this.state.project;
        let currentUser = this.state.currentUser;
        // debugger;
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
                { !this.state.clicked ? null : 
                    <form className="pledge-form-container">
                        <div className="container-name"> Pledge Amount </div>
                        <div className="pledge-value">
                            <div className="dollar-sign">$</div>
                            <input type="number" value={this.state.pledgeAmount}
                             min={reward.cost} onChange={this.update('pledgeAmount')}/>
                        </div>
                        <button id="submit-pledge" onClick={this.handleSubmit}>Continue</button>
                    </form> }
                
            </div>
           
        )
    }
}

export default RewardProjectIndexItem;