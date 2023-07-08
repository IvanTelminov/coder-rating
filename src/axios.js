import axios from "axios";

const  instance = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

instance.defaults.headers.common['Authorization'] = 'Token ' + import.meta.env.VITE_API_TOKEN
export default instance