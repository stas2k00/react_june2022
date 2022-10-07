import {useForm} from "react-hook-form";

import css from './style.module.css'
import {useEffect} from "react";
import {axiosTools} from "../services/axios.services";
export default function CarForm({setCars,setEditCar,editCar}) {
    let {register,formState:{isValid,errors},reset,handleSubmit,setValue} = useForm({mode:"all"});
    let submit = async (car) => {
        await axiosTools.createCar(car)
        axiosTools.getCars().then(({data:cars})=>setCars(cars))
    }
    let update = async (car) => {
        await axiosTools.updateCar(editCar.id,car);
        axiosTools.getCars().then(({data:cars})=>{setEditCar(null);setCars(cars);})
    }
    let cancel = async () => {
        axiosTools.getCars().then(({data:cars})=>{setEditCar(null);setCars(cars);})
    }
    useEffect(()=>{
        if (editCar?.id) {
            setValue('model',editCar?.model)
            setValue('year',editCar?.year)
            setValue('price',editCar?.price)
        } else {
            setValue('model', 'BMW')
            setValue('year', 2021)
            setValue('price', 20000)
        }
    },[])
    if (editCar?.id) {
        return (
            <form onSubmit={handleSubmit(update)} className={css.Form}>
            <input type="text" placeholder={'model'} {...register('model')}/>
            <input type="text" placeholder={'year'} {...register('year',{valueAsNumber:true,required:true,min:{value:1980,message:'Year>1980'},max:{value:new Date().getFullYear(),message:'Year cannot be younger than present year'}})}/>
            <input type="text" placeholder={'price'} {...register('price',{valueAsNumber:true,required:true,max:{value:1000000,message:'price<1000000'}})}/>
            <div className={css.ButtonContainer}>
                <button>Edit</button>
                <button onClick={handleSubmit(cancel)}>Cancel</button>
            </div>

              </form>)
    }else {
        return (
        <form onSubmit={handleSubmit(submit)} className={css.Form}>
            <input type="text" placeholder={'model'} {...register('model')}/>
            <input type="text" placeholder={'year'} {...register('year', {valueAsNumber: true, required: true,min:{value:1980,message:'Year>1980'},max:{value:new Date().getFullYear(),message:'Year cannot be younger than present year'}})}/>
            <input type="text" placeholder={'price'} {...register('price', {valueAsNumber: true, required: true,max:{value:1000000,message:'price<1000000'}})}/>
            <button disabled={!isValid}>Save</button>
        </form>
    )}

}
