export default function Character(props) {
    let {id,name,status,species,gender,image} = props.item;
    return (
        <div className={name+' character'}>
            <img src={image}/>
            <p className={'id-character'}>ID<br/>{id}</p>
            <p className={'name'}>Name<br/>{name}</p>
            <p className={'status'}>Status<br/>{status}</p>
            <p className={'gender'}>Gender<br/>{gender}</p>
            <p className={'species'}>Species<br/>{species}</p>
        </div>
    )
}