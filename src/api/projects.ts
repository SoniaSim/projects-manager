import axios from 'axios';
import { Project } from 'type/project';

const baseURL = 'http://localhost:3000';

export const GET_PROJECTS = async (): Promise<Project[]> => {
  const { data } = await axios.get<Project[]>(`${baseURL}/projects`);
  return data;
};

export const UPDATE_PROJECT = async (projectId: number, infos: Project) => {
  const { data } = await axios.patch(`${baseURL}/projects/${projectId}`, {
    ...infos,
  });

  return data;
};

export const DELETE_PROJECT = async (projectId: number) => {
  const { data } = await axios.delete(`${baseURL}/projects/${projectId}`);
  return data;
};

export const CREATE_PROJECT = async (newProject: Project) => {
  const { data } = await axios.post(`${baseURL}/projects`, newProject);
  return data;
};

export const GET_PROJECT = async (projectId: number) => {
  const response = await axios.get(`${baseURL}/projects/${projectId}`);
  return response.data;
};
