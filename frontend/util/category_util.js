export const fetchCategory = (categoryId) =>{
    return $.ajax({
        method: 'get',
        url: `api/categories/${categoryId}`
    })
};

export const fetchAllCategories = () => {
    return $.ajax({
        method: 'get',
        url: `api/categories`
    })
}