import * as APIProject from '../util/project_util';
export const RECEIVE_ALL_PROJECTS = 'RECEIVE_ALL_PROJECTS';
export const RECEIVE_PROJECT = 'RECEIVE_PROJECT';
export const REMOVE_PROJECT = 'REMOVE_PROJECT';

export const receiveProjects = (payload) => ({
    type: RECEIVE_ALL_PROJECTS,
    payload
});

const receiveProject = (payload) => ({
    type: RECEIVE_PROJECT,
    payload
});

const removeProject = (projectId) => ({
    type: REMOVE_PROJECT,
    projectId
});

export const fetchProjects = () => dispatch => {
    return APIProject.fetchProjects()
        .then(payload => dispatch(receiveProjects(payload)))
};

export const fetchProject = (projectId) => dispatch => {
    return APIProject.fetchProject(projectId)
        .then(payload => dispatch(receiveProject(payload)))
};

export const createProject = (project) => dispatch => {
    return APIProject.createProject(project)
        .then(payload => dispatch(receiveProject(payload)))
};

export const updateProject = (project) => dispatch => {
    return APIProject.updateProject(project)
        .then(payload => dispatch(receiveProjects(payload)))
};

export const deleteProject = (projectId) => {
    return APIProject.deleteProject(projectId)
        .then(project => removeProject(project.id))
};