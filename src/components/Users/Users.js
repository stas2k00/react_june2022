import {useEffect, useState} from "react";

import {User,UserPosts} from "./User";
import {GetDataUsers,GetDataPosts} from "../../services/getter.api.services.users";
import {type} from "@testing-library/user-event/dist/type";

export function iterKey(obj) {
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
    let [userInfoPosts,SetUserPosts] = useState(null)
    let [posts,SetPost] = useState(null)
    const InfoPosts = (userInfo,userInfoPosts,posts) => {
        let arrayOfPostsUser = posts.filter((post)=>userInfo.id === post.userId);
        let userInfoArray = iterKey(arrayOfPostsUser);
        userInfoPosts ? userInfo.id === arrayOfPostsUser[0].userId ? SetUserPosts(null) : SetUserPosts(userInfoArray) : SetUserPosts(userInfoArray)
    }
    useEffect(()=>{
        GetDataUsers.then(users => {SetUsers(users.data)});
        GetDataPosts.then(posts=>{SetPost(posts.data)});
    },[])
    return (<div style={{display:'flex'}}>
        <div>{users.map((user,index)=><User userInfo={user} InfoPosts={InfoPosts} userInfoPosts={userInfoPosts} key={index} posts={posts}/>)}</div>
        {userInfoPosts && <div style={{borderLeft:'5px solid black'}}><UserPosts userInfoPosts={userInfoPosts}/></div>}
    </div>)
}