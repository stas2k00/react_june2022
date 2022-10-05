import {axiosTools} from "../services/axios.services";
import {useEffect, useState} from "react";

import Car from "./Car";
import css from './style.module.css'
import CarForm from "./CarForm";


export default function Cars () {
    let [cars,setCars] = useState([])
    useEffect(()=>{axiosTools.getAll().then(({data})=>setCars(data))
    },[])
    return (<div>
        <CarForm/>
        <div className={css.Cars}>{cars.map(car=><Car car={car} key={car.id}/>)}</div>
    </div>)
}

