function User({userInfo,MoreDetails,userStatus}) {
    return (<div>
        <div>ID {userInfo.id}</div>
        <div>Name {userInfo.name}</div>
        <button onClick={()=>{MoreDetails(userInfo,userStatus)}}>More Info</button>
    </div>)
}

function UserDetails({userInfo}) {
    return <div>{userInfo.map((key,index) => {return <div key={index}>{key}</div>})}</div>
}

export {User,UserDetails}