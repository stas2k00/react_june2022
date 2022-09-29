import {useEffect, useState} from "react";
import GetData from "../../services/getter.api.services";
import {iterKey} from "../Users/Users";

export default function SpaceX() {
    let [launches,SetLaunches] = useState([]);
    useEffect(()=>{
        GetData('https://api.spacexdata.com/v3/launches/').then(launches=>SetLaunches(launches))
    },[])
    let launchesFilter =launches.filter((value)=>value.launch_year !== '2020')
    return (<div>
        {launchesFilter.map(value => {return <div style={{margin:'20px'}}>
            <div>Flight Number: {value.flight_number}</div>
            <div>Launch success: {value.launch_success}</div>
            <div>Launch year: {value.launch_year}</div>
        </div>})}
    </div>)
}