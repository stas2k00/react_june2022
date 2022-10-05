import css from './style.module.css'
import CarDetails from "./CarDetails";
export default function Car ({car}) {
    let {id,model,price,year} = car;
    return (<div className={css.Car}>
        <CarDetails name={'ID'} value={id}/>
        <CarDetails name={'MODEL'} value={model}/>
        <CarDetails name={'YEAR'} value={year}/>
        <CarDetails name={'PRICE'} value={price}/>
        <div className={css.ButtonContainer}>
            <input className={css.Button} type={"button"} value={'Update'}/>
            <input className={css.Button} type={"button"} value={'Delete'}/>
        </div>
    </div>)
}