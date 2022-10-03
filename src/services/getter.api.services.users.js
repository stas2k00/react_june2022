import axios from "axios";
let axiosInstance = axios.create({baseURL:'https://jsonplaceholder.typicode.com/users/'})
let GetData = axiosInstance.get();
export {GetData}