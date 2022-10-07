import axios from "axios";

import {baseURL} from "../configs/urls";

const axiosInstance = axios.create({baseURL});

const axiosTools = {
    getCars:()=>axiosInstance.get(),
    createCar:(car)=>axiosInstance.post(baseURL,car),
    deleteCar:(id)=>axiosInstance.delete(`${baseURL}/${id}`),
    updateCar:(id,car) => axiosInstance.put(`${baseURL}/${id}`,car)
}

export {axiosTools}