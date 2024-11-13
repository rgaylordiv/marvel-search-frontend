import "./Search.css";
import { PUBLIC_KEY, PRIVATE_KEY } from "../../utils/utils";
import { useState } from "react";
import { Link } from "react-router-dom";
import md5 from "md5";
import ItemCard from "../ItemCard/ItemCard";
import ComicCard from "../ComicCard/ComicCard";

export default function Search({
  onCharacterSearchResults,
  onComicSearchResults,
  handleChange,
  handleSubmit,
}) {
  const [character, setCharacter] = useState("");
  const [comic, setComic] = useState("");
  const [characterInfo, setCharacterInfo] = useState(null);
  const [comicData, setComicData] = useState(null);

//   const generateHash = (timeStamp) => {
//     return md5(timeStamp + PRIVATE_KEY + PUBLIC_KEY);
//   };

//   const timeStamp = new Date().getTime();
//   const hash = generateHash(timeStamp);

//   const handleSubmit = (evt) => {
//     evt.preventDefault();
//     getCharacterData();
//   };

//   const handleChange = (evt) => {
//     setCharacter(evt.target.value);
//   };

// const getCharacterData = () => {
//     setCharacterInfo(null);
//     setComicData(null);

//     const characterUrl = `http://gateway.marvel.com/v1/public/characters?apikey=${PUBLIC_KEY}&hash=${hash}&ts=${timeStamp}&nameStartsWith=${character}&limit=100`;

//     fetch(characterUrl)
//       .then((response) => response.json())
//       .then((result) => {
//         setCharacterInfo(result.data || { results: [] });
//         handleCharacterSearchResults(result.data); // was onCharacterSearchResults
//         console.log(result);
//       })
//       .catch((err) => {
//         console.error("Error message:" + err);
//       });
//   };

  // const getComicData = (characterId) => {
  //     setCharacterInfo(null);
  //     setComicData(null);

  //     const comicUrl = `http://gateway.marvel.com/v1/public/characters/${characterId}/comics?apikey=${PUBLIC_KEY}&hash=${hash}&ts=${timeStamp}&limit=100`

  //     fetch(comicUrl)
  //         .then((response) => response.json())
  //         .then((result) => {
  //             setComicData(result.data || { results: [] });
  //             onComicSearchResults(result.data);
  //             console.log(result);
  //         })
  //         .catch((err) => {
  //             console.error('Error message:' + err);
  //         })
  // }

  return (
    <>
      <form className="search__input">
        <input
          className="search__bar"
          placeholder="Search library"
          onChange={handleChange}
        ></input>
        <button
          className="search__bar-button"
          type="submit"
          onClick={handleSubmit}
        ></button>
      </form>
      {/* <ul className='search__results'>
                <div className='search__results-list'>
                    {!comicData && characterInfo && Array.isArray(characterInfo.results) && characterInfo.results[0] && (
                        <ItemCard data={characterInfo.results} onClick={getComicData}/>
                    )}
                    {comicData && comicData.results && Array.isArray(comicData.results) && comicData.results[0] && (
                        <ComicCard data={comicData.results}/>
                    )}
                </div>
            </ul> */}
    </>
  );
}
