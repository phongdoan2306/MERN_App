import axios from 'axios';

// const URL = 'https://blog-app-none.herokuapp.com';
const URL = 'http://localhost:5000';

// API posts
export const fetchPosts = () => axios.get(`${URL}/posts`);
export const createPost = (payload) => axios.post(`${URL}/posts`, payload);
export const updatePost = (payload) => axios.post(`${URL}/posts/update`, payload);

// API accounts
export const loginAccount = (payload) => axios.post(`${URL}/accounts/login`, payload);
export const registerAccount = (payload) => axios.post(`${URL}/accounts/register`, payload);