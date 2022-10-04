import axios from "axios";
let axiosInstance = axios.create({baseURL:'https://jsonplaceholder.typicode.com/'})
let GetDataUsers = axiosInstance.get('users/');
let GetDataPosts = axiosInstance.get('posts/');
export {GetDataUsers,GetDataPosts}