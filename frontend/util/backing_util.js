export const createBacking = (backing) => {
    return $.ajax({
        method: 'post',
        url: 'api/backings',
        data: {backing}
    })
};

export const fetchBacking = (backingId) => {
    return $.ajax({
        method: 'get',
        url: `api/backings/${backingId}`,
    })
};