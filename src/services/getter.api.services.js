const GetUsers = () => {
    return fetch(`https://jsonplaceholder.typicode.com/users/`)
        .then(value => value.json())
}
const GetSpaceX = () => {
    return fetch(`https://api.spacexdata.com/v3/launches/`)
        .then(value => value.json())
}

export {GetUsers,GetSpaceX}