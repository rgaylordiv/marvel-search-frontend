import './ComicSection.css';
import ItemCard from '../ItemCard/ItemCard.jsx';

export default function ComicSection( isLiked, setIsLiked ){
    return(
        <div className='comic-section'>
            <div className='comic-section__header'>
                <p className='comic-section__title'>Your favorite Hero's and Comics!</p>
            </div>
            <ul className='comic-section__lists'>
                <ItemCard isLiked={isLiked} setIsLiked={setIsLiked}/>
            </ul>
        </div>
    )
}