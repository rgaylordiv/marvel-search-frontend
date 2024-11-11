import './NavigationPage.css'
import Search from '../Search/Search.jsx';
import { Link } from 'react-router-dom';

export default function NavigationPage() {
    return(
        <section className='navigation'>
            <div className='navigation-search'>
                <Search/>
            </div>
            <div className='navigation__content'>
                <div className='navigation__header'>
                    <p className='navigation__title'>Results:</p>
                </div>
                <ul className='navigation__results'>

                </ul>
            </div>
            <div className='navigation__favorite'>
                <Link to='/profile' className='navigation__link'>
                    <p className='navigation__to-favorite'>See Your Favorites Here!</p>
                </Link>
            </div>
        </section>
    )
}