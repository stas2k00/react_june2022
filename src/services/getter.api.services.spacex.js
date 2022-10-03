import axios from "axios";
let axiosInstance = axios.create({baseURL:'https://api.spacexdata.com/v3/launches/'})
let GetData = axiosInstance.get();
export {GetData}