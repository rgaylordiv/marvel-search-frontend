import './ComicNavigationPage.css'
import Search from "../Search/Search.jsx";
import ItemCard from "../ItemCard/ItemCard.jsx";
import ComicCard from "../ComicCard/ComicCard.jsx";
import Preloader from "../Preloader/Preloader.jsx";
import { Link } from "react-router-dom";
import { useState } from "react";
import { PUBLIC_KEY, PRIVATE_KEY } from "../../utils/utils.js";
import md5 from "md5";

export default function ComicNaviagtionPage({
    handleComicSearchResults,
    isLoading,
    setIsLoading,
}){
    const [realComic, setRealComic] = useState("");
    const [comicIssue, setComicIssue] = useState("");
    const [searchComic, setSearchComic] = useState(null);
  
    const handleSubmit = (evt) => {
      evt.preventDefault();
      setIsLoading(true);
      getSearchComic();
    };
  
    const handleChange = (evt) => {
      setRealComic(evt.target.value);
      setComicIssue(evt.target.value);
    };
  
    const generateHash = (timeStamp) => {
      return md5(timeStamp + PRIVATE_KEY + PUBLIC_KEY);
    };
  
    const timeStamp = new Date().getTime();
    const hash = generateHash(timeStamp);
  
    const getSearchComic = () => {
        setSearchComic(null);
    
        const searchComicUrl = `https://gateway.marvel.com/v1/public/comics?apikey=${PUBLIC_KEY}&hash=${hash}&ts=${timeStamp}&titleStartsWith=${realComic}&limit=100`;
    
        fetch(searchComicUrl)
          .then((response) => response.json())
          .then((result) => {
            setSearchComic(result.data || { results: [] });
            handleComicSearchResults(result.data);
            console.log(result);
          })
          .catch((err) => {
            console.error("Error message:" + err);
          });
    }
    return (
        <section className="comic-navigation">
          {/* Display Preloader when loading */}
          {isLoading && <Preloader />}
    
          <div className="comic-navigation-search">
            <Search
              onComicSearchResults={handleComicSearchResults}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          </div>
    
          {/* Only show results after loading is complete */}
          {!isLoading && (
            <ul className="comic-navigation__results">
              {/* Check if there are character results */}
              {searchComic &&
                searchComic.results &&
                Array.isArray(searchComic.results) &&
              searchComic.results.length === 0 
                ? (
                <div className="comic-navigation__no-results">
                  <p className="comic-navigation__no-results-text">
                    No comics found for your search
                  </p>
                </div>
              ) : (
                searchComic &&
                searchComic.results &&
                Array.isArray(searchComic.results) &&
                searchComic.results[0] && <ComicCard data={searchComic.results} />
              )}
            </ul>
          )}
        </section>
      );
}
