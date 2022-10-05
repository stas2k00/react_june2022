import css from './style.module.css'
export default function CarDetails ({name,value}) {
    return(<div className={css.CarDetails}>
        <div>{name}</div>
        <div>{value}</div>
    </div>)
}