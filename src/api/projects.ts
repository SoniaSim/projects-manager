import axios from 'axios';
import { Project } from 'type/project';

export const GET_PROJECTS = async (): Promise<Project[]> => {
  const response = await axios.get<Project[]>('http://localhost:3000/projects');
  return response.data;
};
