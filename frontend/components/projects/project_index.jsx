import React from 'react';
import {Route} from 'react-router-dom';
import ProjectIndexItem from './project_index_item';
import {CategoryFooter} from '../categories/category_footer'


class ProjectIndex extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.fetchProjects();
    }

    render(){
        // debugger;
        let {categories} = this.props
        // debugger;
        return (
            <div className="index-background">
                <div className="proj-category-header">
                    <div className="proj-categories">
                        Show Me All Projects With Categories
                    </div>
                </div>

                <section className="index-page">
                    <h3>Explore <div className="proj-count">{this.props.projectsWithAuthors.length} projects</div></h3>
                    <div className="all-projects-container">
                        {this.props.projectsWithAuthors.map( project => (
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