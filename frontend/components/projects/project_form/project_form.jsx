import React from 'react';


class ProjectForm extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            categoryId: "",
            categoryName: "Select Your Category",
            open: false
        };
        this.handleDropDownClick = this.handleDropDownClick.bind(this);
    }
    
    update(field){
        return e => {
            this.setState({ [field]: e.target.value })
        }
    }

    handleDropDownClick(e){
        e.preventDefault();
        if (e.target.className === "cat-dropdown"){
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

    render(){
        let pageNum = 1;
        let {open, categoryName, categoryId} = this.state
        return(
            <div className="form-page">
                <div className="page-num-indicator"> {`${pageNum}`} of 3 </div>
                <div className="form-container">
                    <form className="cat-form">
                        <h2>First, let's get you setup.</h2>
                        <h3>Pick a project category to connect with a specific community. You can always update this later.</h3>
                        <div className={`cat-dropdown ${open ? 'clicked':''} ${categoryId ? "cat-id":''}`} onClick={this.handleDropDownClick}> 
                            {categoryName} <img className="down-arrow" src={window.images.downArrow}/>
                        </div>
                        <div className={`list-container ${open ? 'open':''}`}>
                            <ul>
                                <li data-value="1" onClick={this.handleDropDownClick}>Art</li>
                                <li data-value="2" onClick={this.handleDropDownClick}>Comics &amp; Illustrations</li>
                                <li data-value="3" onClick={this.handleDropDownClick}>Design &amp; Tech</li>
                                <li data-value="4" onClick={this.handleDropDownClick}>Film</li>
                                <li data-value="5" onClick={this.handleDropDownClick}>Food &amp; Craft</li>
                                <li data-value="6" onClick={this.handleDropDownClick}>Games</li>
                                <li data-value="7" onClick={this.handleDropDownClick}>Music</li>
                                <li data-value="8" onClick={this.handleDropDownClick}>Publishing</li>
                            </ul>
                        </div>
                    </form>
                </div>
                <div className="button-container cat-form">
                    <span>Nice to See You Again</span> <button disabled={true}>Next: Project Idea</button>
                </div>
            </div >
        )
    }
}

export default ProjectForm;