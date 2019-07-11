export const fetchRewards = (projectId) => {
    return $.ajax({
        method: 'get', 
        url: `api/projects/${projectId}/rewards`
    })
};

export const createReward = (reward) => {
    return $.ajax({
        method: 'post',
        url: `api/projects/${projectId}/rewards`,
        data: { reward }
    })
}


