import React from 'react';

export const CategoryHeader = props => {
    const categories = ["Art", "Comics & Illustrations", "Design & Tech", "Film",
        "Food & Craft", "Games", "Music", "Publishing"]
    return (
        <div className="bottom-category-nav top-category-nav">
            <ul>
                {categories.map((category, idx) => (
                    <li key={idx}> {category} </li>
                ))}
            </ul>
        </div>

    )

}