import css from './style.module.css'
import CarDetails from "./CarDetails";
import {axiosTools} from "../services/axios.services";
import CarForm from "./CarForm";
export default function Car ({car,setCars,setEditCar,editCar}) {
    let {id,model,price,year} = car;
    const deleteCar = async (id) => {
        await axiosTools.deleteCar(id);
        axiosTools.getCars().then(({data:cars}) => setCars(cars))
    }
    const editCarFn = (car) =>  setEditCar(car)
    if (car.id === editCar?.id) {return (<CarForm setCars={setCars} editCar={editCar} setEditCar={setEditCar}/>)}
    else {
        return (<div className={css.Car}>
            <CarDetails name={'ID'} value={id}/>
            <CarDetails name={'MODEL'} value={model}/>
            <CarDetails name={'YEAR'} value={year}/>
            <CarDetails name={'PRICE'} value={price}/>
            <div className={css.ButtonContainer}>
                <input type={"button"} value={'Edit'} onClick={()=> editCarFn(car)}/>
                <input type={"button"} value={'Delete'} onClick={() => deleteCar(id)}/>
            </div>
        </div>)
    }
}