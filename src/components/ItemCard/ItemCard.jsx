import './ItemCard.css';
import comicTest from '../../assets/comicTest.png';

export default function CharacterCard( isLiked ){
    const itemLikeButtonClass = (
        `${isLiked ? 'item-card__liked' : 'item-card__like'}`
    )

    return(
        <div className='item-card'>
            <div className='item-card__info'>
                <p className='item-card__title'>Amazing Fantasy #15</p>
                <button className={itemLikeButtonClass} type='button'></button>
            </div>
            <img className='item-card__image' src={comicTest} />
        </div>
    )
}