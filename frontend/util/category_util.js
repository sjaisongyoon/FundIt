export const fetchCategoryProjects = (categoryId) =>{
    return $.ajax({
        method: 'get',
        url: `api/categories/${categoryId}`
    })
};