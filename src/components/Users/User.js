export default function User (props) {
    let {id,name} = props.item;
    return (
        <div>
            <h3>ID {id}</h3>
            <h4>Name {name}</h4>
        </div>
    )
}