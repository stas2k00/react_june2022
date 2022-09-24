export default function Simpson(props) {
    let {name,age,info,photo} = props.item;
    return (
        <div className={name+' simpson'}>
            <img src={photo}/>
            <h3 className={'name'}>{name}</h3>
            <p className={'age'}>Age {age}</p>
            <p className={'info'}>{info}</p>
        </div>
    )
}