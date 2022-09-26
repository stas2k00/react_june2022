import {GetUsers} from "../../services/getter.api.services";
import {useEffect, useState} from "react";
import User from "./User";

export default function Users () {
    let [users,SetUsers] = useState([]);
    useEffect(GetUsers.then(users => {SetUsers(users)}),[] );
    return (users.map((user,index) => {return <User item={user} key={index}/>}))
}