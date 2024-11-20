import "./ComicCard.css";

export default function ComicCard({ data }) {
  return (
    <div className="comics">
      {data.map((comic) => {
        const dataUrl = comic.urls.find(
          (element) => element["type"] === "detail"
        ).url;

        const price =
          comic.prices && comic.prices[0] ? comic.prices[0].price : 0;

        return (
          <a
            key={comic.id}
            className="comics__card"
            style={{
              background: `url(${comic.thumbnail.path}.${comic.thumbnail.extension})`,
              backgroundSize: "cover",
            }}
            href={dataUrl}
            target="_blank"
            rel="noreferrer"
          >
            <div className="comics__card-content">
              <div className="comics__card-info">
                <div className="comics__card-header">
                  <p className="comics__caption">{comic.title}</p>
                </div>
              </div>
              <div className="comics__value">
                <p className="comics__price">
                  ${price === 0 ? "N/A" : price.toFixed(2)}
                </p>
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );
}
