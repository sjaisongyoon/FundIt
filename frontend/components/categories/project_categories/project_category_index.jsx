import React from 'react';
import { Link } from 'react-router-dom';

class ProjectCategoryIndex extends React.Component {
    
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchCategoryProjects(this.props.match.params.categoryId)
    }

    render(){
        if (!this.props.projects) return <div></div>
        // debugger;
        return(
            <div>
                <section className="category-desc-container">
                    <article className="category-desc">
                        <h3>{this.props.category.categoryName}</h3>
                        <p></p>
                    </article>
                </section>
            </div>
        )
    }
}

export default ProjectCategoryIndex;