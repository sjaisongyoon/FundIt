import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

const mapStateToProps = state =>({
    categories: Object.values(state.entities.categories)
})

const CategoryHeader = props => {
    // debugger;
    let {categories} = props
    return (
        <div className="bottom-category-nav top-category-nav">
            <ul>
                {categories.map((category, idx) => (
                    <li key={idx}> 
                        <Link to={`/categories/${category.id}`}>
                            {category.categoryName} 
                        </Link>
                    </li>
                ))}
            </ul>
        </div>

    )

}

export default connect(mapStateToProps, null)(CategoryHeader);
