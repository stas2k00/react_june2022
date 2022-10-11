import {Link} from "react-router-dom";
import css from './css.modules.css'


export default function App() {
  return (<div>
    <div className={css.linksStyle}><Link to={'/'}>Home page</Link></div>
    <div><Link to={'/todos'}>Todo list</Link></div>
    <div><Link to={'/albums'}>Albums</Link></div>
    <div><Link to={'/comments'}>Comments</Link></div>
  </div>);
}