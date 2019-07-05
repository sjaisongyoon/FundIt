import * as APIProject from '../util/project_util';
export const RECEIVE_ALL_PROJECTS = 'RECEIVE_ALL_PROJECTS';
export const RECEIVE_PROJECT = 'RECEIVE_PROJECT';
export const REMOVE_PROJECT = 'REMOVE_PROJECT';

export const receiveProjects = (projects) => ({
    type: RECEIVE_ALL_PROJECTS,
    projects
});

const receiveProject = (project) => ({
    type: RECEIVE_PROJECT,
    project
});

const removeProject = (projectId) => ({
    type: REMOVE_PROJECT,
    projectId
});

export const fetchProjects = () => dispatch => {
    return APIProject.fetchProjects()
        .then(projects => dispatch(receiveProjects(projects)))
};

export const fetchProject = (projectId) => dispatch => {
    return APIProject.fetchProject(projectId)
        .then(project => dispatch(receiveProject(project)))
};

export const createProject = (project) => dispatch => {
    return APIProject.createProject(project)
        .then(project => dispatch(receiveProject(project)))
};

export const updateProject = (project) => dispatch => {
    return APIProject.updateProject(project)
        .then(project => dispatch(receiveProjects(project)))
};

export const deleteProject = (projectId) => {
    return APIProject.deleteProject(projectId)
        .then(project => removeProject(project.id))
};