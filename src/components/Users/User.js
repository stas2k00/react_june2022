export default function User({userInfo}) {
    return (<div>
        <div>ID {userInfo.id}</div>
        <div>Name {userInfo.name}</div>
        <button onClick={()=>{userInfo.MoreDetails(userInfo)}}>More Info</button>
    </div>)
}