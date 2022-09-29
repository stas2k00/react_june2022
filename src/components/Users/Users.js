import {useEffect, useState} from "react";
import GetData from "../../services/getter.api.services";
import {User,UserDetails} from "./User";

function iterKey (obj) {
    let arrayOfKeys = [];
    for (const [keyName,valueName] of Object.entries(obj)) {
        if (typeof valueName === `object`) {
            arrayOfKeys.push(iterKey(valueName))
        } else {
            arrayOfKeys.push(''+keyName+': '+valueName+' ')
        }
    }
    return (arrayOfKeys)
}
export default function Users() {
    let [users,SetUsers] = useState([])
    let [userInfo,SetUser] = useState(null)
    const MoreDetails = (userInfo,userStatus) => {
        let userInfoArray = iterKey(userInfo);
        userStatus ? userStatus[0] === userInfoArray[0] ? SetUser(null) : SetUser(userInfoArray) : SetUser(userInfoArray)
    }
    useEffect(()=>{
        GetData('https://jsonplaceholder.typicode.com/users/')
            .then(users => SetUsers(users))
    },[])
    return (<div style={{display:'flex'}}>
        <div>{users.map((user,index)=><User userInfo={user} MoreDetails={MoreDetails} userStatus={userInfo} key={index}/>)}</div>
        {userInfo && <div style={{borderLeft:'5px solid black'}}><UserDetails userInfo={userInfo}/></div>}
    </div>)
}