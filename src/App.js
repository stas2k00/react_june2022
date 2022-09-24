import logo from './logo.svg';
import './App.css';
import Simpsons from "./components/Simpsons/Simpsons";
import Characters from "./components/RickAndMorty/Characters";

function App() {
  return (
      <div className={'hw1'}>
        <div className={'simpsons'}><Simpsons/></div>
        <div className={'rick-morty'}><Characters countOfCharacters={10}/></div>
      </div>
  )
}

export default App;
