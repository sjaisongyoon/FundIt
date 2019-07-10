import React from 'react';


class ProjectForm extends React.Component{
    
    constructor(props){
        super(props)

        // const categories = {
        //     1: 'Art',
        //     2: 'Comics & Illustrations',
        //     3: 'Design & Tech',
        //     4: 'Film',
        //     5: 'Food & Craft',
        //     6: 'Games',
        //     7: 'Music',
        //     8: 'Publishing',
        // };

        this.state = {
            categoryId: "",
            categoryName: "Select Your Category",
            open: false,
            buttonIdx: 0,
            location: "Please Choose Your Location",
            title: "",
            description: "",
            endDate: "",
            campaign: "",
            pledgeGoal: 0,
        };
        this.handleCatDropDown = this.handleCatDropDown.bind(this);
        this.handleLocDropDown = this.handleLocDropDown.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this)
    }
    
    update(field){
        return e => {
            this.setState({ [field]: e.target.value })
        }
    }

    handleCatDropDown(e){
        e.preventDefault();
        if (e.target.className === "dropdown"){
            this.setState({open: !this.state.open})
        } else{
            let categoryName = $("<div />").html(e.target.innerHTML).text();
            this.setState({
                open: !this.state.open,
                categoryId: e.target.dataset.value,
                categoryName: categoryName
            })
        }
    }

    handleLocDropDown(e){
        // debugger;
        e.preventDefault();
        if (e.target.className === "dropdown") {
            this.setState({ open: !this.state.open })
        } else{
            let pickedLocation = $("<div />").html(e.target.innerHTML).text();
            this.setState({
                open: !this.state.open,
                location: pickedLocation
            })
        }
    }
    
    handleSubmit(e){
        e.preventDefault();
        // debugger;
        const formData = new FormData();
        formData.append('project[category_id]', this.state.categoryId)
        formData.append('project[title]', this.state.title)
        formData.append('project[description]', this.state.description)
        formData.append('project[location]', this.state.location)
        formData.append('project[pledge_goal]', this.state.pledgeGoal)
        formData.append('project[end_date]', this.state.endDate)
        formData.append('project[campaign]', this.state.campaign)
        formData.append('project[photo]', this.state.photoFile)

    
        if (e.target.id === "next" && this.state.buttonIdx === 3){
            this.props.createProject(formData)
                .then( action => {
                    // debugger
                    return this.props.history.push(`/projects/${action.payload.project.id}`)
                }) 
        } else if (e.target.id === "prev"){
            this.setState({
                buttonIdx: this.state.buttonIdx - 1
            })
        } else if (e.target.id === "next"){
            this.setState({
                buttonIdx: this.state.buttonIdx + 1
            })
        }

    }

    handleFile(e){

        const reader = new FileReader();
        const file = e.currentTarget.files[0];
        reader.onloadend = () => this.setState({photoUrl: reader.result, photoFile: file});
        
        if (file){
            reader.readAsDataURL(file);
        } else {
            this.setState({photoUrl: "", photoFile: null})
        }
        
        this.setState({
            photoFile: e.currentTarget.files[0],
            photoUrl: e.currentTarget.files[0]
        })
    }



    render(){
        let pageNum = 1;
        let {open, categoryName, categoryId, buttonIdx, location, title} = this.state;
        let {description, endDate, campaign, pledgeGoal} = this.state;
        let nextButtonText = ["Next: Location", "Project Idea", "Campaign Details", "Create Project"];
        let prevButtonText = ["Nice To See You Again", "Back To Category", 
                              "Back To Location", "Back to Campagin Details"];
        let majorRegions = ["Europe", "Asia", "Africa", "North America",
                            "Middle East", "East Asia", "South America",
                            "Oceania", "Central America", "Carribean", "Central Asia",
                            "North Africa", "Eastern Europe"];

        let nextButtonStatus;

        let photoUrl = this.state.photoUrl ? `url(${this.state.photoUrl})` : 'none';

        if (buttonIdx === 0 && categoryId){
            nextButtonStatus = false;
        } else if (buttonIdx === 1 && (location !== "Please Choose Your Location") ){
            nextButtonStatus = false;
        } else if (buttonIdx === 2 && (title && description)){
            nextButtonStatus = false;
        } else if(buttonIdx === 3 && (endDate && campaign && pledgeGoal)){
            nextButtonStatus = false; 
        } else {
            nextButtonStatus = true
        }
        console.log(endDate)
        return(
            <div className="form-page">
                <div className="page-num-indicator"> {pageNum + buttonIdx} of 4 </div>
                <div className="form-container">
                
                    <form className={`form ${buttonIdx > 0 ? 'hide' : ''}`}>
                        <h2>First, let's get you setup.</h2>
                        <h3>Pick a project category to connect with a specific community. You can always update this later.</h3>
                        <div className={`dropdown ${open ? 'clicked':''} ${categoryId ? "dark-text":''}`} onClick={this.handleCatDropDown}> 
                            {categoryName} <img className="down-arrow" src={window.images.downArrow}/>
                        </div>
                        <div className={`list-container ${open ? 'open':''}`}>
                            <ul>
                                <li data-value="1" onClick={this.handleCatDropDown}>Art</li>
                                <li data-value="2" onClick={this.handleCatDropDown}>Comics &amp; Illustrations</li>
                                <li data-value="3" onClick={this.handleCatDropDown}>Design &amp; Tech</li>
                                <li data-value="4" onClick={this.handleCatDropDown}>Film</li>
                                <li data-value="5" onClick={this.handleCatDropDown}>Food &amp; Craft</li>
                                <li data-value="6" onClick={this.handleCatDropDown}>Games</li>
                                <li data-value="7" onClick={this.handleCatDropDown}>Music</li>
                                <li data-value="8" onClick={this.handleCatDropDown}>Publishing</li>
                            </ul>
                        </div>
                    </form>

                    <form className={`form ${buttonIdx === 1 ? '' : 'hide'}`}>
                        <h2>What's your location?</h2>
                        <h3>Please choose the region that is closest to you. You can always edit that later</h3>
                        <div className={`dropdown ${open ? 'clicked' : ''} ${location === "Please Choose Your Location" ? "dark-text" : ''}`} 
                            onClick={this.handleLocDropDown}>
                            {location} <img className="down-arrow" src={window.images.downArrow} />
                        </div>
                        <div className={`list-container ${open ? 'open' : ''}`}>
                            <ul>
                                {majorRegions.map( (region, idx) =>(
                                    <li key={idx} onClick={this.handleLocDropDown}>
                                        {region}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </form>

                    <form className={`form ${buttonIdx === 2 ? '' : 'hide'}`}>
                        <h2>Give your project an attractive name</h2>
                        <h3>You can always change this later if you think of something better</h3>
                        <div className="project-title-desc-container">
                            <label><div>Project Title:</div>
                                <input type="text" value={title} onChange={this.update('title')}/>
                            </label>
                            <label> <div>Project Description:</div>
                                <textarea value={description} onChange={this.update('description')}/>
                            </label>
                        </div>
                    </form>

                    <form className={`form ${buttonIdx === 3 ? '' : 'hide'}`} >
                        <h2>There's just a couple more details we need</h2>
                        <div className="project-extra-detail">
                            <label><div>Pledge Goal (USD):</div>
                                <input type="number" value={pledgeGoal} onChange={this.update('pledgeGoal')} min="0" />
                            </label>
                            <label><div>Campaign End Date:</div>
                                <input type="date" value={endDate} onChange={this.update('endDate')} />
                            </label>
                            <label> <div>Campaign:</div>
                                <textarea value={campaign} onChange={this.update('campaign')} />
                            </label>
                            <label id="file-label"> <div>Project Photo</div>
                                <input type="file" onChange={this.handleFile}/>
                                <div className={`photo-container ${photoUrl !== 'none' ? '':'hide'}`} style={{backgroundImage: photoUrl}}></div>
                            </label>
                        </div>
                    </form>

                </div>

        

                <div className="button-container form">
                    <button id="prev" disabled={buttonIdx > 0 ? false : true} onClick={this.handleSubmit}>
                        <img className={`left-arrow ${buttonIdx > 0 ? '':'hide'} `} src={window.images.leftArrow}/> {prevButtonText[buttonIdx]}
                    </button> 
                    <button id="next" disabled={nextButtonStatus} onClick={this.handleSubmit}>
                        {nextButtonText[buttonIdx]}
                    </button>
                </div>
            </div >
        )
    }
}

export default ProjectForm;