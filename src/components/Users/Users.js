import {useEffect, useState} from "react";
import GetData from "../../services/getter.api.services";
import User from "./User";
export default function Users() {
    let [users,SetUsers] = useState([])
    let [user,SetUser] = useState([])
    const MoreDetails = (userInfo) => {

    }
    useEffect(()=>{
        GetData('https://jsonplaceholder.typicode.com/users/')
            .then(users => SetUsers(users))
    },[])
    return (<div>{users.map((user,index)=><User userInfo={user}/>)}</div>)
}