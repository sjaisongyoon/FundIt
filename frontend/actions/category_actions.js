import * as APICategory from '../util/category_util';
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';

const receiveCategories = (payload) => ({
    type: RECEIVE_CATEGORIES,
    payload
})


export const fetchCategories = () => dispatch => {
    return APICategory.fetchAllCategories()
        .then(payload => dispatch(receiveCategories(payload)))
}
