function User({userInfo,InfoPosts,userInfoPosts,posts}) {
    return (<div>
        <div>ID {userInfo.id}</div>
        <div>Name {userInfo.name}</div>
        <button onClick={()=>{InfoPosts(userInfo,userInfoPosts,posts)}}>Info Posts</button>
    </div>)
}

function UserPosts({userInfoPosts}) {
    return <div>{userInfoPosts.map((key,index) => {return <div key={index}>{key}</div>})}</div>
}

export {User,UserPosts}