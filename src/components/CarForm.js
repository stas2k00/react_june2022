import {useForm} from "react-hook-form";

import css from './style.module.css'
export default function CarForm() {
    let {register,formState:{isValid,errors},reset,handleSubmit,setValue} = useForm({mode:"all"});
    let submit = (car)=>{}
    return (
    <form onSubmit={handleSubmit(submit)} className={css.Form}>
        <input type="text" placeholder={'model'} {...register('model')}/>
        <input type="text" placeholder={'year'} {...register('year',{valueAsNumber:true,required:true,min:{value:1900,message:'Year>1900'}})}/>
        <input type="text" placeholder={'price'} {...register('price',{valueAsNumber:true,required:true})}/>
        <input type="button" value={'Save'} disabled={!isValid}/>
    </form>
)
}