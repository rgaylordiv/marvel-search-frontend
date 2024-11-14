import "./ItemCard.css";
import comicTest from "../../assets/comicTest.png";

export default function ItemCard({ isLiked, data, onClick, comicsAvailable }) {
  const itemLikeButtonClass = `${
    isLiked ? "item-card__liked" : "item-card__like"
  }`;

  return (
    <li className="item-card">
      {data.map((character) => {
        return (
          <div className="item-card__wrapper" key={character.id}>
            <div className="item-card__info">
              <p className="item-card__title" key={character.name}>
                {character.name}
              </p>
              <button className={itemLikeButtonClass} type="button"></button>
            </div>
            <img
              className="item-card__image"
              style={{
                background: `url(${character.thumbnail.path}.${character.thumbnail.extension}) no-repeat center`,
                backgroundSize: "cover",
              }}
            />
            <div className="item-card__button">
              <button
                // key={comic.comics?.available}
                className="item-card__comic"
                type="button"
                onClick={() => onClick(character.id)}
              >
                View Comics! ({comicsAvailable})
              </button>
            </div>
          </div>
        );
      })}
    </li>
  );
}
