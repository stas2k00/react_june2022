import {axiosTools} from "../services/axios.services";
import {useEffect, useState} from "react";

import Car from "./Car";
import css from './style.module.css'
import CarForm from "./CarForm";


export default function Cars () {
    let [cars,setCars] = useState([])
    let [editCar,setEditCar] = useState(null)
    useEffect(()=>{axiosTools.getCars().then(({data})=>setCars(data))},[])
    return (<div className={css.Cars}>
        <CarForm setCars={setCars} setEditCar={setEditCar}/>
        {cars.map(car=><Car car={car} key={car.id} setCars={setCars} setEditCar={setEditCar} editCar={editCar}/>)}
    </div>)
}

