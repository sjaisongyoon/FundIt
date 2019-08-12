import React from 'react';
import { Link } from 'react-router-dom';

class ProjectCategoryIndex extends React.Component {
    
    constructor(props){
        super(props)
    }

    componentDidMount(){
        debugger;
        this.props.fetchCategoryProjects(this.props.match.params.categoryId)
    }

    render(){
        if (!this.props.projects) return <div></div>

        return(
            <section>
                <article>
                    Hi
                </article>
            </section>
        )
    }
}

export default ProjectCategoryIndex;