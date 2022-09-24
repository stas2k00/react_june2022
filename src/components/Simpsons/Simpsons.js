import {simpsons} from "./simpsons_data";
import Simpson from "./Simpson";
import '../../css/simpsons/simpsons.css'
export default function Simpsons () {
    return (simpsons.map((simpson,index) => <Simpson item={simpson} key={index}/>))
}