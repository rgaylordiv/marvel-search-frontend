import './Search.css';
import { Link } from 'react-router-dom';

export default function Search(){
    return(
        <form className="search__input">
            <input className="search__bar" placeholder='Search library'></input>
            <button className='search__bar-button' type='submit'></button>
        </form>
    )
}