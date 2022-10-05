import axios from "axios";

import {baseURL} from "../configs/urls";

const axiosInstance = axios.create({baseURL});

const axiosTools = {
    getAll:()=>axiosInstance.get()
}

export {axiosTools}