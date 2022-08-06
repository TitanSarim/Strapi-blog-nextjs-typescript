import axios from 'axios';


// connect api
const api = axios.create({

    baseURL: process.env.API_BASE_URL,
    headers:{
        Authorization: `Bearer ${process.env.BACKEBND_API_KEY }`,
    }

})

// get categories from api

export const fetchCategories = async () => api.get('/api/categories')

// get atricles from api
export const fetchPosts = async (queryString: string) => api.get(`/api/posts?${queryString}`)

export const fetchPostBySlug = async (queryString: string) => api.get(`/api/posts?${queryString}`)
