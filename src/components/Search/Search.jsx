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
    </>
  );
}
