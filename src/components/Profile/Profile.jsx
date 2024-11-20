import './Profile.css';
import ComicSection from '../ComicSection/ComicSection.jsx';

export default function Profile( isLiked, setIsLiked ) {
    return(
        <div className='profile'>
            <section className='profile__comic'>
                <ComicSection isLiked={isLiked} setIsLiked={setIsLiked}/>
            </section>
        </div>
    )
}