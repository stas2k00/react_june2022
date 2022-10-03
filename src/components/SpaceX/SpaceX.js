import {useEffect, useState} from "react";
import {GetData} from "../../services/getter.api.services.spacex";
import {iterKey} from "../Users/Users";

export default function SpaceX() {
    let [launches,SetLaunches] = useState([]);
    useEffect(()=>{
        GetData.then(({data})=>SetLaunches(data))
    },[])
    let launchesFilter =launches.filter((value)=>value.launch_year !== '2020')
    return (<div>
        {launchesFilter.map((value,index) => {return <div style={{margin:'20px'}} key={index}>
            <div>Flight Number: {value.flight_number}</div>
            <div>Launch success: {value.launch_success}</div>
            <div>Launch year: {value.launch_year}</div>
        </div>})}
    </div>)
}