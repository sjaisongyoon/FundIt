import React from 'react';
import {Route} from 'react-router-dom';
import ProjectIndexItem from './project_index_item';
import {CategoryFooter} from '../categories/category_footer'


class ProjectIndex extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            category: "All",
            open: false,
            projects: this.props.projectsWithAuthors
        }
        this.handleCatDropDown = this.handleCatDropDown.bind(this);
    }

    componentDidMount(){
        this.props.fetchProjects()
            .then(() => this.setState({
                projects: this.props.projectsWithAuthors
            }))
    }

    handleCatDropDown(e) {
        e.preventDefault();
        if (e.target.className === "category-filter-name " || e.target.className === "select-arrow" || e.target.className === "category-filter-name clicked") {
            this.setState({ open: !this.state.open })
        } else {
            let category;
            let projects;
            if (e.target.dataset.value === "All"){
                projects = this.props.projectsWithAuthors
                category = "All"
            } else {
                category = this.props.categories[e.target.dataset.value].categoryName
                projects = this.props.projectsWithAuthors.filter(project => {
                    return project.categoryId === parseInt(e.target.dataset.value)
                });
            }
            this.setState({
                open: !this.state.open,
                category,
                projects
            })
        }
    }

    render(){
        let {categories} = this.props
        let {open} = this.state
        
        return (
            <div className="index-background">
                <div className="proj-category-header">
                    <div className="proj-categories">
                        Show Me All Projects In  
                            <div className={`category-filter-name ${open ? 'clicked' : ''}`} onClick={this.handleCatDropDown}>
                                {this.state.category} <img className="select-arrow" src={window.images.downArrow} />
                            </div>
                            <div className={`cat-filter-list-container ${open ? 'open' : ''}`}>
                                <ul>
                                    <li data-value="All" onClick={this.handleCatDropDown}>All</li>
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
                    </div>
                </div>

                <section className="index-page">
                    <h3>Explore <div className="proj-count">{this.state.projects.length} projects</div></h3>
                    <div className="all-projects-container">
                        {this.state.projects.map( project => (
                            <ProjectIndexItem key={project.id} 
                            project={project}
                            category={categories[project.categoryId]}/>
                        ))}
                    </div>
                </section>
            </div>
        )

    }
}

export default ProjectIndex;