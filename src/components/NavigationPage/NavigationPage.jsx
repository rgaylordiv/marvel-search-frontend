import "./NavigationPage.css";
import Search from "../Search/Search.jsx";
import ItemCard from "../ItemCard/ItemCard.jsx";
import ComicCard from "../ComicCard/ComicCard.jsx";
import Preloader from "../Preloader/Preloader.jsx";
import { Link } from "react-router-dom";
import { useState } from "react";
import { PUBLIC_KEY, PRIVATE_KEY } from "../../utils/utils.js";
import md5 from "md5";

export default function NavigationPage({
  handleCharacterSearchResults,
  handleComicSearchResults,
  isLoading,
  setIsLoading,
}) {
  const [comicData, setComicData] = useState(null); // Store the search results
  const [characterInfo, setCharacterInfo] = useState(null);
  const [character, setCharacter] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setIsLoading(true);
    getCharacterData();
  };

  const handleChange = (evt) => {
    setCharacter(evt.target.value);
  };

  const generateHash = (timeStamp) => {
    return md5(timeStamp + PRIVATE_KEY + PUBLIC_KEY);
  };

  const timeStamp = new Date().getTime();
  const hash = generateHash(timeStamp);

  const getCharacterData = () => {
    setCharacterInfo(null);
    setComicData(null);

    const characterUrl = `http://gateway.marvel.com/v1/public/characters?apikey=${PUBLIC_KEY}&hash=${hash}&ts=${timeStamp}&nameStartsWith=${character}&limit=100`;

    fetch(characterUrl)
      .then((response) => response.json())
      .then((result) => {
        setCharacterInfo(result.data || { results: [] });
        handleCharacterSearchResults(result.data); // was onCharacterSearchResults
        console.log(result);
      })
      .catch((err) => {
        console.error("Error message:" + err);
      });
  };

  const getComicData = (characterId) => { // can filter by name but results aren't always accurate to the character chosen
    setCharacterInfo(null);
    setComicData(null);
    setIsLoading(true);

    const comicUrl = `http://gateway.marvel.com/v1/public/characters/${characterId}/comics?apikey=${PUBLIC_KEY}&hash=${hash}&ts=${timeStamp}&limit=100`;

    fetch(comicUrl)
      .then((response) => response.json())
      .then((result) => {
        setComicData(result.data || { results: [] });
        handleComicSearchResults(result.data);
        console.log(result);
      })
      .catch((err) => {
        console.error("Error message:" + err);
      });
  };

  return (
    <section className="navigation">
      {/* Display Preloader when loading */}
      {isLoading && <Preloader />}

      <div className="navigation-search">
        <Search
          onCharacterSearchResults={handleCharacterSearchResults}
          onComicSearchResults={handleComicSearchResults}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>

      {/* Only show results after loading is complete */}
      {!isLoading && (
        <ul className="navigation__results">
          {/* Check if there are character results */}
          {characterInfo &&
          characterInfo.results &&
          Array.isArray(characterInfo.results) &&
          characterInfo.results.length === 0 ? (
            <div className="navigation__no-results">
              <p className="navigation__no-results-text">No characters found for your search</p>
            </div>
          ) : (
            characterInfo &&
            characterInfo.results &&
            Array.isArray(characterInfo.results) &&
            characterInfo.results.length > 0 && (
              <ItemCard data={characterInfo.results} onClick={getComicData} />
            )
          )}

          {comicData &&
            comicData.results &&
            Array.isArray(comicData.results) &&
            comicData.results[0] && <ComicCard data={comicData.results} />}
        </ul>
      )}
    </section>
  );
}
