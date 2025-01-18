import axios from 'axios'


const API = axios.create({ baseURL: `${import.meta.env.VITE_BACKEND_BASEURL}` });

export const logIn= (formData)=> API.post('/auth/login',formData);

export const signUp = (formData) => API.post('/auth/register', formData);
