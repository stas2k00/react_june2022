import {useState} from "react";
import Character from "./Character";
import '../../css/rickandmorty/rickandmorty.css'
export default function Characters (props) {
    let [characters,SetCharacters] = useState([]);
    fetch(`https://rickandmortyapi.com/api/character/`)
        .then(value => value.json())
        .then(value => {
            let arraysOfCharacters = [];
            for (let i = 0; i < props.countOfCharacters; i++) {
                arraysOfCharacters.push(value.results[i])
            }
            SetCharacters(arraysOfCharacters)
        })
    return (characters.map((character,index)=> {return <Character item={character} key={index}/>}))
}
